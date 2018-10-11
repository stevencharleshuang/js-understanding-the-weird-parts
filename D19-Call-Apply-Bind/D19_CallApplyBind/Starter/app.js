let person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    let fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

let logName = function(lang1, lang2) {
  console.log('logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
}

// bind() binds the 'this' variable for logName function to the person object
let logPersonName = logName.bind(person)

logPersonName(); // => 'John Doe'
logPersonName('en');

// By calling .call() instead of invoking with (), you can designate what the this variable is assigned to
logName.call(person, 'en', 'es');

////

// similar to .call() but expects an array arg
logName.apply(person, [ 'en', 'es' ]);


////

// can also be done on the fly
(function(lang1, lang2) {
  console.log('logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
}).apply(person, [ 'en', 'es' ]);


////

// function borrowing
let person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
}


// Grabbed method getFullName from person but applied binding to person2
person.getFullName.apply(person2);

console.log(person.getFullName.apply(person2)); // => 'Jane Doe'

////

// function currying
function multiply(a, b) {
  return a * b;
}

// by binding with arg 2, first arg will always be 2
let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4)); // => 8

let multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4)); // => 12


////