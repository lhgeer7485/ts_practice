type Combinable = number | string;
type ConversionDes = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  conversion: ConversionDes,
) {
  let result: number | string;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    conversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (conversion === "as-number") {
  //   return +result;
  // }
  // return result.toString();
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineNames = combine("max", "lee", "as-text");
