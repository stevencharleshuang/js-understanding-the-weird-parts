let person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  } 
}

let john = {
  firstname: 'John',
  lastname: 'Doe'
}

/* Don't do this EVER, demo only! */
// give john object access to person method getFullName()
john.__proto__ = person;
console.log(john.getFullName()); // => 'John Doe'
// JS Engine Prototype chain finds this property in John object so not person{}'s 'Default'
console.log(john.firstname); // => 'John'

let jane = {
  firstname: 'Jane'
}

jane.__proto__ = person;
// Prototype Chain finds firstname, doesn't find lastname, looks and grabs lastname property from person {}
console.log(jane.getFullName()); // => 'Jane Default'
