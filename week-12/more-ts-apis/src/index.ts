interface User {
  id: string;
  name: string;
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
