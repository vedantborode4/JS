//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34567878958743543n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "vedant",
    age: 20,
}

console.log(heros);


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// -----------MEMORY---------------

//Stack(primitive)(copy) , heap(non-primitive)(reference of original value)

let myYoutubeName = "vedantborodedotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(anotherName);

let userOne = {
    email:"user@google.com"
}

let userTwo = userOne

userTwo.email = "vedant@google.com"

console.log(userOne.email);
console.log(userTwo.email);