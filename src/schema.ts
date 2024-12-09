import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    # The root Query type defines the entry points for our GraphQL API.
    type Query {
        hello: String   
        greet(name: String!): String
        randomNumber: Int
        user(id: Int!): User    # Returns a 'User' object containing fields like id, name, and email.
        totalUsers: Int,
        rollDice(numDice: Int!, numSides: Int): [Int],
        ip: String
    }

    # The 'User' type defines the structure of a user object in the API.
    type User {
        id: Int
        name: String
        email: String
    }
  `);

export default schema;
