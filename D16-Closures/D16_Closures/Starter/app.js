function greet(whattosay) {
  return function(name) {
    console.log(whattosay + ' ' + name);
  }
}

greet('Hi')('Tony'); // => 'Hi Tony'

var sayHi = greet('Hi');
sayHi('Tony'); // => 'Hi Tony'
sayHi('Jimmy'); // => 'Hi Jimmy'
