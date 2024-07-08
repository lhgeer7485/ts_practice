const add = (...numbers: number[]) =>
  numbers.reduce((curRes, curVal) => curVal + curVal, 0);

const addedNumbers = add(1, 2, 3, 4, 5.6);
