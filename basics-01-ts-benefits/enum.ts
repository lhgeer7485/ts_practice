// const ADMIN = 0;
// const READ_ONLY = 1;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "lee",
  age: 30,
  hobbies: ["sports", "coking"],
  role: Role.ADMIN,
};

let arr: string[];
arr = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
