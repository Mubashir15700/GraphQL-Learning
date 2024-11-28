import { User, users } from "./mockData.ts";

export const getUserById = (id: number): User | null => {
  if (id <= 0) {
    throw new Error("Invalid user ID");
  }

  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const getTotalUsers = (): number => {
  return users.length;
};
