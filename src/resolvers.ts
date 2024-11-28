import { getUserById, getTotalUsers } from "./userService.ts";
import { User } from "./mockData.ts";

interface Query {
  hello: () => string;
  greet: (args: { name: string }) => string;
  randomNumber: () => number;
  user: (args: { id: number }) => User | null;
  totalUsers: () => number;
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
};

export default resolvers;
