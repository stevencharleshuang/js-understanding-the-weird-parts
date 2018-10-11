// Function statement
function greet(name) {
  console.log('Hello ' + name);
}

greet('John');

// Function expression
let greetFunc = function(name) {
  console.log('Hello ' + name);
};

greetFunc('John');

// Immediately Invoked Function Expression (IIFE)
let greeting = function(name) {
  return 'Hello ' + name;
}('John');

console.log(greeting);

// Trick the Syntax Parser into allowing a function expression without an associated var
// Wrap the function expression with parentheses
(function(name) {
  return 'Hello ' + name;
});

let firstname = 'Methusala';

(function(name) {
  let greeting = 'Hello';
  console.log(greeting + ' ' + name);
}(firstname)); // IIFE