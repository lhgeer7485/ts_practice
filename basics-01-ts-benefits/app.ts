const hobbies: string[] = ["sports", "cooking"];
const [hobby1, hobby2, ...remain] = hobbies;

const person = {
  firstName: "John",
  age: 30,
};

let arr: string[];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
