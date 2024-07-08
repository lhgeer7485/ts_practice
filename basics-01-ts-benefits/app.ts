const hobbies: string[] = ["sports", "cooking"];
const [hobby1, hobby2, ...remain] = hobbies;

const person = {
  firstName: "John",
  age: 30,
};

const { firstName: userName, age } = person;
