const person = {
  name: "lee",
  age: 30,
  hobbies: ["sports", "coking"],
};

let arr: string[];
arr = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
