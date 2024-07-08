const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "lee",
  age: 30,
  hobbies: ["sports", "coking"],
  role: [2, "author"],
};

let arr: string[];
arr = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
