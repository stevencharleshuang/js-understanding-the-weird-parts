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

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

// Example of Reflection
for (let prop in john) {
  // hasOwnProperty will check if object actually has passed in property and return Boolean
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ': ' + john[prop]);
  }
}

// Example of Extend using Underscore.js

let jane = {
  address: '111 Main St.',
  getFormalFullName: function() {
    return this.lastname + ', ' + this.firstname;
  }
}

let jim = {
  getFormalFullName: function() {
    return firstname;
  }
}

// Grabs properties from jane and jim objects that are missing from john object and adds them to john object
_.extend(john, jane, jim)

console.log(john)
