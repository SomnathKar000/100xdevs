interface User {
  id: string;
  name: string;
}
type Users = Record<string, User | null>;

const users: Users = {
  abc123: { id: "2123", name: "Abc" },
  xyz123: { id: "3456", name: "Xyz" },
  jkw123: null,
};
