//Iterate through input string
//Split string into array where each index is individual letter
//Create library of Roman numerals and their values
//Compare each index to the previous or the following 1 or two indices to determine value
//Compile the values of the numeral
//Return result

const romanToInt = (input = "") => {
  const table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanArray = input.toLowerCase().split("");
  let total = 0;

  for (let i = 0; i < romanArray.length; i++) {
    if (romanArray[i] === "i" && romanArray[i + 1] === "v") {
      total += 4;
      i += 1;
    } else if (romanArray[i] === "i" && romanArray[i + 1] === "x") {
      total += 9;
      i += 1;
    } else if (romanArray[i] === "x" && romanArray[i + 1] === "l") {
      total += 40;
      i += 1;
    } else if (romanArray[i] === "x" && romanArray[i + 1] === "c") {
      total += 90;
      i += 1;
    } else if (romanArray[i] === "c" && romanArray[i + 1] === "d") {
      total += 400;
      i += 1;
    } else if (romanArray[i] === "c" && romanArray[i + 1] === "m") {
      total += 900;
      i += 1;
    } else {
      total += table[romanArray[i]];
    }
  }
  console.log(total);
};

let numeral = "XII";
romanToInt(numeral);
