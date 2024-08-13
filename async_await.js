// Async/Await = Async : async makes a function return  promise
//               Await : makes an asnync function wait for a promise
//                  
//                 Allows you to write asynchronus code in synchronus manner
//                 Async doesn't have resolve or reject parameters
//                 Everything after Await is placed in an event queue
// 

// function goal1() {
//     return new Promise((res,rej)=> {
//         setTimeout(()=> {
//             let isGoal = true;
//             if(isGoal) {
//                 res('you scored a goal !!!');
//             }else {
//                 rej('you missed a chance')
//             }
//         },2000)
//     })
// }
// function goal2() {
//     return new Promise((res,rej)=> {
//         setTimeout(()=> {
//         let isGoal = true;
//         if(isGoal) {
//             res('you scored two goal !!!');
//         }else {
//             rej('you missed a chance')
//         }
//         },2500)
//     })
// }
// function goal3() {
//     return new Promise((res,rej)=> {
//         setTimeout(()=> {
//             let isGoal = true;
//             if(isGoal) {
//                 res('you scored a hattrick !!!');
//             }else {
//                 rej('you missed another  chance for a hattrick !!')
//             }
//         },500)
//     })
// }

// async function game() {
//     const goal1Result = await goal1();
//     console.log(goal1Result);

//     const goal2Result = await goal2();
//     console.log(goal2Result);

//     const goal3Result = await goal3();
//     console.log(goal3Result);

//     console.log('you wint the game');
// }
// game();