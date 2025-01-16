import express from "express";

import cors from "cors";

import { createHandler } from "graphql-http/lib/use/express";

import schema from "./schema.ts";
import resolvers from "./resolvers.ts";
import graphiqlHandler from "./graphiql.ts";
import { loggingMiddleware } from "./middleware.ts";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(loggingMiddleware);

// Serve the GraphiQL IDE.
app.get("/graphiql", graphiqlHandler);

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue: resolvers,
    context: (req) => ({
      ip: req.raw.ip,
    }),
  })
);

app.listen(4000, () =>
  console.log("Running a GraphQL API server at http://localhost:4000/graphql")
);
