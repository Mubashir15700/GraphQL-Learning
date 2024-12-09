import { getUserById, getTotalUsers } from "./userService.ts";
import { User } from "./mockData.ts";

interface Query {
  hello: () => string;
  greet: (args: { name: string }) => string;
  randomNumber: () => number;
  user: (args: { id: number }) => User | null;
  totalUsers: () => number;
  rollDice: (args: { numDice: number; numSides?: number }) => number[];
  ip: (args: any, context: { ip: string }) => string;
}

// Resolver function for each API endpoint
const resolvers: Query = {
  hello() {
    return "Hello world!";
  },
  greet({ name }) {
    return `Hello, ${name}!`;
  },
  randomNumber() {
    return Math.floor(Math.random() * 100);
  },
  user({ id }) {
    // Business logic: Validate the ID before fetching user
    return getUserById(id);
  },
  totalUsers() {
    return getTotalUsers();
  },
  rollDice({ numDice, numSides }) {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
  ip(args, context) {
    return context.ip;
  },
};

export default resolvers;
