interface User {
  id: string;
  name: string;
}
type MapData = Record<string, User>;

const map = new Map<string, User>();

map.set("xyz123", { id: "2312", name: "xyz" });
map.set("abc123", { id: "34343", name: "abc" });
