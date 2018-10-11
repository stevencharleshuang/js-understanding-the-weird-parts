// This is a function factory, a function that makes functions
function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  }
}

// function object whose closure points to language in the scope chain
let greetEnglish = makeGreeting('en');
let greetSpanish = makeGreeting('es');

greetEnglish('john', 'doe'); // => 'Hello john doe'
greetSpanish('john', 'doe'); // => 'Hola john doe'
