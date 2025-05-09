// 2 types of datatypes

// primitive

//  7 types: String, Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
console.log(typeof score)
const scoreValue = 100.3
console.log(typeof scoreValue)


const isLoggedIn = false
console.log(typeof isLoggedIn)


const outsideTemp = null
console.log(typeof outsideTemp)

let userEmail;
console.log(typeof userEmail)

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId);



// Reference(Non primitive)
// Array,Objects,Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof heros)

const myFunction = function(){
    console.log("Hello world");
}
console.log( typeof myObj)
console.log(typeof myFunction);


// Null => typeof object aata h
// undefined => typeof undefined aata h
// array and objects ka typeof object aata h
// function ka typeof function aata h 