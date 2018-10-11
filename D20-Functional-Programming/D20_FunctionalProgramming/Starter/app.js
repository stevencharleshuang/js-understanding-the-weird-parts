let arr1 = [1, 2, 3];
console.log(arr1);

let arr2 = [];

arr1.forEach((num) => {
  arr2.push(num * 2);
});

console.log(arr2); // => 2, 4, 8

////

// Functional programming approach
function mapForEach(arr, fn) {
  let newArr = [];
  arr.forEach((num) => {
    newArr.push(
      fn(num)
    );
  });
  return newArr;
}

// pass a function in on the fly
arr2 = mapForEach(arr1, function(item) {
  return item * 2;
});
console.log(arr2); // => [2, 4, 8]

// pass a function in on the fly that returns Booleans
arr3 = mapForEach(arr1, function(item) {
  return item > 2;
});
console.log(arr3); // => [false, false, true]

// pass a function that has a limiter
let checkPastLimit = function(limiter, item) {
  return item > limiter;
}
// 
let arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4); // => [false, true, true]

// function takes a limiter
let checkPastLimitSimplified = function(limiter) {
  // returns a function that will actually be used 
  return function(limiter, item) {
    return item > limiter;
  // .bind() presets the limiter
  }.bind(this, limiter);
};

let arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);