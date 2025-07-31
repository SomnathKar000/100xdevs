interface User {
  readonly id: string;
  readonly name: string;
  age?: number;
  email: string;
  password: string;
  image?: string;
  createdAt?: Date;
}

type UserProfile = Pick<User, "name" | "age" | "password">;

function updateUser(user: UserProfile) {
  // Updates user
}

const obj: User = {
  id: "12121",
  name: "Hello",
  email: "test@gmail.com",
  password: "123456",
};
