// // call() Method

// // Function borrowing (we can borrow functions from other object and use it with the data of other object)
// fullName.call(name2,'spain','madrid ')


// // apply() method
// // The only difference between the call and apply mehotd is the way we pass the arguments.
// fullName.apply(name2,['spain','madrid'])
// // The way we pass arguments is first we pass the refference to the 'this' variable and the second argument is list to the argument what we have to pass in the function
// // instead of passing the argument individually in the call mehtod , in apply method we pass the argument in a array list



// // bind() method
// // the bind method looks exactly the same call method but the only difference is instead of directly calling this method over here the 'bind' method binds this method and prints full name with the object and returns with copy of that method
// let printMyname = fullName.bind(name3,"cristiano ",'portugal')
// printMyname() 


let car = {
    carName : 'Toyota',
    origin : 'china',
}

let cardetail = function (manufacture,owner) {
    console.log(`${this.carName} from ${this.origin} , it is manufactur from ${manufacture} & owner is ${owner}.`);
}
// call
let car2 =  { 
    carName : 'ferrari',
    origin : 'london'
}
cardetail.call(car2,'kerala','salim')


// apply
let car3 = {
    carName : 'bugatti',
    origin : 'germany'
}

cardetail.apply(car3,['kochi','afsal'])

// bind
let car4 = {
    carName : 'benz',
    origin : 'usa'
}

let carBind = cardetail.bind(car4,'maradu','sanu');
carBind()