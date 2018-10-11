// by using var in the for loop, the output of the funcs will be 3, 3, 3
// The function looks to the variables available in the Outer Environment
// It sees i = 3, so it console logs 3
function buildFunctionsVar() {
  let arr = [];

  for (var i = 0; i < 3; i ++) {
    arr.push(
      function() {
        console.log(i);
      }
    )
  }
  return arr;
}

let fsVar = buildFunctionsVar();

fsVar[0](); // => 3
fsVar[1](); // => 3
fsVar[2](); // => 3

// By using let in the for loop, i's scope will be restricted to block scope 
// Therfore, the value of i is segmented
function buildFunctionsLet() {
  let arr = [];

  for (let i = 0; i < 3; i ++) {
    arr.push(
      function() {
        console.log(i);
      }
    )
  }
  return arr;
}

let fsLet = buildFunctionsLet();

fsLet[0](); // => 0
fsLet[1](); // => 1
fsLet[2](); // => 2

// By using an IIFE, we can force a var in the for loop to function as expected
function buildFunctionsVarIIFE() {
  let arr = [];

  for (var i = 0; i < 3; i ++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i))
    )
  }
  return arr;
}

let fsVarIIFE = buildFunctionsVarIIFE();

fsVarIIFE[0](); // => 0
fsVarIIFE[1](); // => 1
fsVarIIFE[2](); // => 2
