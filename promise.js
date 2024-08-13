// // what is a promise ?
// // a promise is an object represnting the eventual completion or failure of an asynchronus operation.

// // Promise are used to handle asynch operations in javascript
// // Promise state tells you that in what state that proise is initially the promise will be 'pending'
// //  state and once we have got the data back after that thr promise sate changes to fulfilled state
// // promise object is 'immutable' 

// Do these chores in order

//  1. Walk the dog
//  2. clean the kicthen
//  3. take out the traash


// This asynchronus operation with 'callBack Hell'
function walkDog(callBack) {
    setTimeout(()=> {
        console.log('you walked the dog');
    },1500)
    callBack()
}

function cleanTheKitchen(callBack) {
    setTimeout(()=> {
        console.log('you cleaned the kitchen');
    },25000)
    callBack()
}

function takeOutTrash(callBack) {
    setTimeout(()=> {
        console.log('you taked out the trash');
    },500)
    callBack()
}







