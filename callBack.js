// // CallBack
// //  a callBack is function that is passed as an argument to another function.

// // used to handle asynchronus operation
// //       1. Reading a file
// //       2. Network request
// //       3. Interacting With databases

// // Ex 1
// // function hello(callBack) {
// //         console.log('hello world');
// //         callBack()
// // }

// // function goodBye() {
// //     console.log('goodBye');
// // }

// // hello(goodBye)

// // Ex 2

// function sum(x,y,oper) {
//     let opp = oper(x,y)
//     console.log(opp);
// }

// function operation(num1,num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// sum(10,10,operation);

// CALLBACK HELL
//   Situtaion in javascript where callbacks
//   are nested within other callbacks to the
//   degree where the code is difficult to read.
//   Old pattern to handle asychronus functions.
//   Use Promises + async/await to avoid Callback Hell

// function task1(callBack) {
//     setTimeout(()=> {
//         console.log('task 1 completed');
//         callBack()
//     },3000)
// }
// function task2(callBack) {
//     setTimeout(()=> {
//         console.log('task 2 completed');
//         callBack()
//     },1000)

// }
// function task3(callBack) {
//     setTimeout(()=> {
//         console.log('task 3 completed');
//         callBack()
//     },2000)

// }
// function task4(callBack) {
//     setTimeout(()=> {
//         console.log('task 4 completed');
//         callBack();
//     },2500)

// }

// task1(()=>{
//     task2(()=> {
//         task3(()=> {
//             task4(()=> {
//                 console.log('all task finished');
//             })
//         })
//     })
// })

function add(num1, num2, callBack) {
  setTimeout(() => {
    let err = false;
    if (num1 == 0) {
      err = true;
    }
    let sum = num1 + num2;
    callBack(sum, err);
  }, 2000);
}

function double(num1, num2, callBack) {
  setTimeout(() => {
    let multiply = num1 * num2;
    callBack(multiply);
  }, 2000);
}

function divide(num1, num2, callBack) {
  setTimeout(() => {
    let op = num1 / num2;
    callBack(op);
  }, 2000);
}

add(10, 20, (sum, err) => {
  if (err) {
    console.log("first number is zero !!!");
  } else {
    console.log(sum);
  }
  double(sum, sum, (output) => {
    console.log(`doubled number : ${output}`);
    divide(output, 10, (op) => {
      console.log(`divided number : ${op}`);
    });
  });
});
