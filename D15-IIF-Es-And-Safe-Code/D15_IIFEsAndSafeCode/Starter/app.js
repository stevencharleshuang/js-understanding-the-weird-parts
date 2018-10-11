// IIFE
let  firstname = 'John';

(function(name) {
    
    let greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
}(firstname)); // IIFE

// Intentionally affect the global object
(function(global, name) {
  let greeting = 'Hello';
  global.greeting = 'Hello';
  console.log(greeting + ' ' + name);
}(window, 'John')); // IIFE

console.log(greeting);




















