import { PrismaClient, Review } from "@prisma/client";

import cors from "cors";
import express from "express";
import morgan from "morgan";

const app = express();

const prisma = new PrismaClient();

const PROJECT_NAME = "dummyProject";

app.use(cors());
app.use(morgan("dev"));
app.set("port", process.env.PORT || 5000);
app.use(express.json());
app.use(express.json());

app.get("/reviews/getAll", async (_, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { name: PROJECT_NAME },
      include: { reviews: true },
    });

    if (project) {
      const { reviews } = project;
      res.status(200).json({ reviews });
      return;
    }
    throw new Error("Could not find project");
  } catch (err) {
    res.status(500).json({ err });
  }
});

app.post("/reviews/add", async (req, res) => {
  const data = req.body;
  const review = data.review as Review;
  try {
    await prisma.review.create({
      data: {
        rating: review.rating,
        description: review.description,
        Project: { connect: { name: PROJECT_NAME } },
      },
    });
    res.status(200).send("Ok");
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
});

app.get("/health", (_, res) => {
  res.status(200).send("Ok");
});

app.get("/", (_, res) => {
  res.status(200).send("Ok");
});

const port = app.get("port");
const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default server;
