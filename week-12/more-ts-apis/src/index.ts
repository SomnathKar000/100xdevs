interface User {
  name: string;
  age: number;
}

function calculateAge(user1: User, user2: User): number {
  return user1.age + user2.age;
}

const test1 = {
  name: "test 1",
  age: 12,
};
const test2 = {
  name: "Test 2",
  age: 18,
};

const totalAge = calculateAge(test1, test2);

console.log(totalAge);
