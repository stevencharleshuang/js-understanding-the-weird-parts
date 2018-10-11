// closures with setTimeout()
function sayHiLater() {
  let greeting = 'Hi!';

  setTimeout(function() {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

////
// Callbacks

function tellMeWhenDone(callback) {
  let a = 1000; // some work
  let b = 2000; // some work

  callback();
}

tellMeWhenDone(function() {
  console.log('I am done!');
});

tellMeWhenDone(function() {
  console.log('All done...');
});