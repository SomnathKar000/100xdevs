interface User {
  name: string;
  email: string;
  password: string;
}

type UserExclude = Pick<User, "email" | "password">;

const user: UserExclude = {
  email: "xyz@gmail.com",
  password: "23123",
};
