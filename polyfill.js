// // Polyfill for bind() Method.
// // What is 'polyfill' ?
// //     what if, suppose your browser
// //     doesn't have a bind function and
// //     you have to write you own bind function.

// let name1 = {
//     firstName : 'lamine',
//     lastName : 'yamal'
// }

// let printName = function () {
//     console.log(this.firstName +' '+ this.lastName);
// }

// let fullName = printName.bind(name1);
// fullName()

// // Every functions should have to access the mybind()
// Function.prototype.myBind = function (...args) {
//     let obj = this;
//     return function() {
//         obj.call(args[0])
//     }
// }

// let fullName2 = printName.myBind(name1);
// fullName2()
