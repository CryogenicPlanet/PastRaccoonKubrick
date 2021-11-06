# Description for v2

Briefly description of architectural decisions I made and why I made them


## Frontend

For the frontend I forked my own personal template https://github.com/CryogenicPlanet/vite-typescript-tailwind-eslint-boilerplate this basically has all the configuration I like setup and ready to go. It uses `vite` which is a blazing fast react build tool

I copied the main design from v1, and ported it over to `jsx` and abstracted it into react components.

As I am using `graphql` for this section, I used `@apollo/client` with https://www.graphql-code-generator.com/ to generate queries, mutations and subscriptions as hooks and typed them. This made it really easy to work with them and call them.


Obviously with react I was able to abstract the UI better into components and use them to make the code much cleaner

### Half Stars

So I solved this part of the ui challenge using a cool trick which allowed me to overflow the stars in different directions

```tsx
if (halfStar) {
    // So this is where the trick exists to make the half stars work
    // The outer dive has a maxWidth of 10px and overflow hidden, and we keep changing the overflow direction
    // The width of the svg itself is 20px so we get a nice half star
    // This is also recursively using itself so we can keep a consistent looking star
    return (
      <div className="flex items-center">
        <div
          className="overflow-hidden inline-block w-[10px]"
          style={{ direction: 'ltr' }}>
          <Star checked={true}></Star>
        </div>
        <div
          className="overflow-hidden inline-block w-[10px]"
          style={{ direction: 'rtl' }}>
          <Star checked={false}></Star>
        </div>
      </div>
    )
  }
  return (
    <svg
      className={`${
        checked ? 'text-gray-900' : 'text-gray-200'
      }  h-5 w-5 flex-shrink-0`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
```

I used something similar for inputting but setup 10 half stars and then converted that back to a 5 star rating


The subscriptions are covered in the bottom as the connect to both backend and front-end


## Backend

For the backend I used `apollo-server` with `type-graphql` and `type-graphql-prisma` which auto generated all the resolves and types for me from my Prisma schema.

Additionally I wrote a custom resolver to setup subscription on new review and triggered that a custom new review mutation. (_Note: The subscription is not setup to work with creating many reviews at once, but that is not in the UI so I left it_)

This makes the complexity of the server super low (Except problems with `type-graphql`, more on that later)

I also had to change the `rating` from `Int` to `Float` in prisma to support half stars


## Subscriptions (Real time reviews)

To enable real time reviews from different clients I setup Graphql Subscriptions which make it very easy to do real time updates like this. 

Graphql Subscriptions do require some extra boilerplate and config found in `Apollo.tsx` and `backend/src/index.ts`


## Things I would've done differently

Primarily not use `type-graphql`, which it provides a very clean experience at the end. The docs are not that great and it was extremely buggy for me, and the decorators are not great. I would say I spent an extra 1-2 hrs just solving `type-graphql` problems in trying to write the custom subscription and mutation resolver, with getting its type inference system working.

Another note here is, I might've been able to hack together the real time update by using a custom websocket server and just using `REST API` faster as while I had written/used graphql before I am not nearly as comfortable