import "reflect-metadata";

import { createServer } from "http";

import express from "express";
import { execute, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";

import { Prisma, PrismaClient } from "@prisma/client";

import { ApolloServer } from "apollo-server-express";
import {
  resolvers,
  Review,
} from "@generated/type-graphql";
import * as tq from "type-graphql";
import {
  Resolver,
  Subscription,
  Root,
  PubSub,
  Mutation,
  Ctx,
  Arg,
  Publisher,
  Int,
} from "type-graphql";
import path from "path";

type Context = {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
};


@Resolver(Review)
class ReviewSubscriptionResolver {
  @Subscription((returns) => Review, {
    topics: "Review",
  })
  newReview(@Root() reviewPayload: Review): Review {
    return {
      ...reviewPayload,
    };
  }

  @Mutation((returns) => Review)
  async createReview(
    @Arg('rating', type => Int) rating: number,
    @Arg('description', type => String) description: string,
    @Arg('projectName', type => String) projectName: string,


    
    @Ctx() { prisma }: Context,
    @PubSub("Review") publish: Publisher<Review>
  ): Promise<boolean> {
    try {
      const newReview = await prisma.review.create({
        data: {
          rating: rating,
          description: description,
          Project: { connect: { name: projectName } },
        },
      });

      await publish(newReview);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

(async function () {
  const app = express();

  const schema = await tq.buildSchema({
    resolvers: [...resolvers, ReviewSubscriptionResolver],
    emitSchemaFile : path.resolve(__dirname, "../prisma", "generated/type-graphql", "schema.gql")
  });

  const httpServer = createServer(app);

  const prisma = new PrismaClient();

  const context = () => {
    return {
      prisma,
    };
  };

  const server = new ApolloServer({
    schema,
    context,
  });

  SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: server.graphqlPath }
  );

  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;
  httpServer.listen(PORT, () =>
    console.log(`Server is now running on http://localhost:${PORT}/graphql`)
  );
})();
