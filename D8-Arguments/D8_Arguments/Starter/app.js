function greet(firstname, lastname, language) {

  language = language || 'en';

  if (arguments.length === 0) {
    console.log('missing params');
    return;
  }
  console.log(`args[0]: ${arguments[0]}`); // => 'john'
  console.log(arguments);

}

greet(); // => 'missing params'
greet('john', 'doe', 'en'); // => Arguments(3) ["john", "doe", "en", callee: ƒ, Symbol(Symbol.iterator):