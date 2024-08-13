const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

const ageLessthanThirty = users.filter(({age})=> age  < 30).map(({firstName})=> firstName);


console.log(ageLessthanThirty);

const agelessThanThirty = users.reduce((acc,{age,firstName})=> {
    if(age < 30) {
        acc.push(firstName)
    }
    return acc;
},[])


console.log(agelessThanThirty);

