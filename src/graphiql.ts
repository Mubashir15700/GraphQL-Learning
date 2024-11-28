import { Request, Response } from "express";
import { ruruHTML } from "ruru/server";

const graphiqlHandler = (req: Request, res: Response): void => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
  // Use `ruruHTML` to generate the HTML content for the GraphiQL interface.
  // The `endpoint` option specifies the GraphQL server endpoint ("/graphql")
  // that this IDE will interact with.
};

export default graphiqlHandler;
