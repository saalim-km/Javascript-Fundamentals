// Generator functions are a special types of functions in JavaScript,
//  introduced in ES6, that have the built-in capability to be paused and
//  resumed allowing us to take control of the execution flow and generate multiple values


// Generator funciton return a generator object
// yield (yield is essentially a special type of return keyword that is only usefull inside of a generator.)
// Purpose of a generator is run some code and return a value , run some more code and return a value and so on until you get the end of all of the code


/*/ the 'next' method returns an object that contains a value property
  containing the 'yielded' value and a boolean 'done' property which
  indicates if the generator has yielded its last value or not.*/

// Syntax of generator funcion
// function* addNumber() {
//     console.log('hello world');
//     yield ' generator paused';
//     console.log('hello world');
//     console.log('hello world');
//     console.log('hello world');
//     yield 'end of the function'
// }

// let gen = addNumber();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());