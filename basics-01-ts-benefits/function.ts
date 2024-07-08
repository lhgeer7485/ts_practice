function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: ", num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValuse: (a: number, b: number) => number;

combineValuse = add;
// combineValuse = printResult;

console.log(combineValuse(8, 8));

addAndHandle(10, 20, (res) => {
  console.log(res);
});
