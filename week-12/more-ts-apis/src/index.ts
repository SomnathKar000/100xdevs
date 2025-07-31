interface User {
  id: string;
  name: string;
}
interface Users {
  [key: string]: User;
}

const users: Users = {
  abc123: { id: "2123", name: "Abc" },
  xyz123: { id: "3456", name: "Xyz" },
};
