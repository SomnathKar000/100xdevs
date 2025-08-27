import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

console.log("Running");

interface User {
  name: string;
  email: string;
  password: string;
}
interface Todo {
  title: string;
  description: string;
  userId: string;
  done?: boolean;
}

type AtLeastOne<T> = {
  [K in keyof T]: Pick<T, K>;
}[keyof T] &
  Partial<T>;

const user: AtLeastOne<User> = {
  name: "test",
  // email: "email.com",
  // password: "password",
};

async function insertUser(name: string, email: string, password: string) {
  try {
    const response = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    console.log("response ", response);
  } catch (error) {
    console.log("Error while creating a user");
  }
}

async function updateUser(id: string, data: AtLeastOne<User>) {
  try {
    const response = await prisma.user.update({
      where: {
        id,
      },
      data: data,
    });
    console.log("Response ", response);
  } catch (error) {
    console.log("Error while updating an user");
  }
}

async function addTodo(todoData: Todo) {
  try {
    const response = await prisma.todo.create({
      data: todoData,
    });
    console.log("response ", response);
  } catch (error) {
    console.log("Error while adding a todo", error);
  }
}

async function getAllTodosFromUserId(userId: string) {
  try {
    const response = await prisma.user.findMany({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        todos: true,
      },
    });
    console.log("response ", response);
  } catch (error) {
    console.log("Error while getting all todo from user id");
  }
}

const todo = {
  title: "new 2",
  description: "description 2",
  userId: "a28acb1d-628a-4fbd-8819-deae69b06236",
};
// addTodo(todo);
getAllTodosFromUserId("a28acb1d-628a-4fbd-8819-deae69b06236");
