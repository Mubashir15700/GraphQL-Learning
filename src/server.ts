import express from "express";
import { createHandler } from "graphql-http/lib/use/express";

import schema from "./schema.ts";
import resolvers from "./resolvers.ts";
import graphiqlHandler from "./graphiql.ts";

const app = express();

// Serve the GraphiQL IDE.
app.get("/graphiql", graphiqlHandler);

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue: resolvers,
  })
);

app.listen(4000, () =>
  console.log("Running a GraphQL API server at http://localhost:4000/graphql")
);
