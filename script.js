// // // let p = parseInt(prompt('ener the principle amount: '));
// // // let r = parseFloat(prompt('ener the intrest rate: '));
// // // let n = parseFloat(prompt('ener the number of years: '));

// // // function sI () {
// // //     let simpleInterst = (p*r*n) / 100;
// // //     return simpleInterst;
// // // }
// // // console.log(`simple interest for the given amount is : ${sI()}`);



// // let arr1 = [];
// // let arr2 = [];
// // let temp = [];

// // let limit1 = parseInt(prompt(' size of array 1 : '));
// // alert('enter values of array 1');
// // for(i=0;i<limit1;i++) {
// //     arr1.push(parseInt(prompt(`enter value ${i+1} : `)));
// // }

// // let limit2 = parseInt(prompt(' size of array 2 : '));
// // alert('enter values of array 2');
// // for(i=0;i<limit2;i++) {
// //     arr2.push(parseInt(prompt(`enter value ${i+1} : `)));
// // }
// // console.log(`array 1 before swapping`,arr1.join("\t"));
// // console.log(`array 2 before swapping`,arr2.join("\t"));

// // let allArayLimit = limit1 + limit2;
// // for(i=0;i<allArayLimit;i++) {
// //     temp[i] = arr1[i];
// //     arr1[i] = arr2[i];
// //     arr2[i] = temp[i];
// // }

// // console.log(`array 1 after swapping`,arr1.join("\t"));
// // console.log(`array 2 after swapping`,arr2.join("\t"));



// let size = parseInt(prompt('size of array : '));

// let a = [];

// for(i=0;i<size;i++) {
//     a.push(parseInt(prompt(`enter value ${i+1} : `)));
// }
// let temp = 0;
// for(i=0;i<size-1;i++) {
//     for(j=i+1;j<size;j++) {
//         if(a[i] < a[j]) {
//             temp = a[i];
//             a[i] = a[j];
//             a[j] = temp;
//         }
//     }
// }

// for(i=0;i<size;i++) {
//     console.log('array in descending order : ', a.join('\t'));
// }



// var x = 1;

// a();
// b();
// console.log(x);

// function a() {
//     var x = 100;
//     console.log(x)
// }
// function b() {
//     var x = 10;
//     console.log(x)
// }

// Avg of prime number & Non prime Number
// let sum = 0;
// let arrPrime = 0;
// let primeConut = 0;
// let arrNonPrime = 0;
// let nonPrimeCount = 0;
// let a = [];
// let n = parseInt(prompt('size of the array'));
// for(i=0;i<n;i++) {
//     a [i] = parseInt(prompt(`enter value in position ${i+1}`));
//     sum += a[i];
// }
// let flag;
// for(i=0;i<n;i++) {
//     flag = 0;
//     if(a[i]<=1) {
//         flag = 1;
//     }else {
//         for(j=2;j<n/2;j++) {
//             if(a[i]%j==0) {
//                 flag = 1;
//                 break;
//             }
//         }
//     }
//     if(flag==0) {
//         arrPrime += a[i];
//         primeConut++;
//     }else {
//         arrNonPrime += a[i];
//         nonPrimeCount++;     
//     }
// }


// console.log(`avg of prime number  ${arrPrime / primeConut}`);
// console.log(`avg of non prime number ${Math.round(arrNonPrime / nonPrimeCount)}`);

// Delete two element after the occurance of prime number

// let a = [1,2,3,4,5]
// console.log(a.join('\t'))

// a.push(6,7,8)
// console.log(a.join('\t'))

// let myArray = a.slice();
// console.log(myArray.join('\t'))

// myArray.reverse()
// console.log(myArray.join('\t'))

// myArray.sort();
// console.log(myArray.join('\t'))

// Spread Operator
// let arr1 = ['cristiano' , 'messi' , 'neymar'];
// let arr2 = ['saint maximin' , 'palmer' , 'nesta'];

// const arrMerge = [...arr1,arr2];

// console.log(arrMerge);

// let arr = ['cristiano' , 'messi' , 'neymar'];

// let [seven , ten,eleven] = arr;

// console.log(eleven);

// rest method
// let obj = {

//     name : 'cristiano',
//     age : 39,
//     goals : 900,
// }

// let {name,...rest} = obj;

// console.log(name)
// console.log( rest);

// arrow function


// ForEach Method
// let myObject = [
//     {
//         name : 'cristiano',
//         age : 39,
//         country : 'portugal',
//     },
//     {
//         name : 'messi',
//         age : 37,
//         country : 'Argentina',
//     },
//     {
//         name : 'neyamr',
//         age : 28,
//         country : 'brazil',
//     }
// ]
// myObject.forEach(function(value,index,array) {
//     console.log(value.name);
// })

// Slice method
// let a = ['messi','neymar', 'hazard'];

// let b = a.slice(0,1);

// console.log(b.join());
// console.log(a.join('\t'));

// b.push('crisitano');
// console.log(b.join('\t'));



// function a() {
//     let x = 10;
//     function b() {
//         function c() {
//             console.log(x);
//         }
//         c();
//     }
//     b()
// }
// a();


// Closure

// function x() {
//     var b = 200;
//     var t = 20;
//     function y() {
//         var a = 100;
//         function z() {
//             console.log(a,b)
//         }
//         z();
//     }
//     y();
// }
// x();


