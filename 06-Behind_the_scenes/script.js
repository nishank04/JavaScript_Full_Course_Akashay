'use strict';

///Scope in practice

// function calcAge (birthyear) {
//     const age = 2021 - birthyear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthyear}`;
//         console.log(output);

//         if (birthyear >= 1981 && birthyear <= 1996) {
//           var millenial = true;
//           //Create new variable with same name as outer scope's variable
//           const firstName = 'steven';

//           //Reassigning outer scope's variable
//           output = 'New Output'
//           const str = `Oh, and you are a millenial, ${firstName}`
//           console.log(str)

//           function add (a, b) {
//               return a + b
//           }
//           console.log(add(2, 5))
//         }
//        // console.log(str)
//         console.log(millenial)
//         //console.log(add(2, 5))
//         console.log(output)
//     }
//     printAge();
//     return age;
// }
// const firstName = 'Nishank'
// calcAge(1989);
//console.log(age)
//printAge();

///Hoisting and TDZ

//Variables
// console.log(me)
// console.log(job)
// console.log(year)

// var me = 'Nishank'
// let job = 'developer'
// const year = 1989

// const myName = 'Nishank'
// if (myName==='Nishank') {
//     console.log(`${myName} job is a ${job}`)
//     var job = 'developer'
// }

///Functions

// console.log(addDec1(2,3))
// //console.log(addExpr(2,3))
// console.log(addArrow)
// console.log(addArrow(2,3))


// function addDec1(a, b) {
//     return a + b
// }

// const addExpr = function (a, b) {
//     return a + b
// }

// var addArrow = (a, b) => a + b;

//Example
//console.log(undefined)
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10

// function deleteShoppingCart() {
//     console.log(`All products are deleted`)
// }

// //tio be covered in next class
// // var x = 1;
// // let y = 2;
// // const z = 3

// // console.log(x === window.x)
// // console.log(x === window.y)
// // console.log(x === window.z)

// //this keyword
// //console.log(this)

// // const calcAge = function (birthyear) {
// //     console.log(2021 - birthyear)
// //     console.log(this)
// // }
// // calcAge(1989)

// const calcArrow = birthyear => {
//     console.log(2021 - birthyear)
//     console.log(this)
// }

// calcArrow(1989)

// const nishank = {
//     year: 1989,
//     calcAge: function () {
//         console.log(this)
//         console.log(2021 - this.year)
//     },
// }
// nishank.calcAge()

// const akshay = {
//     year: 1987,
// }

// akshay.calcAge = nishank.calcAge
// akshay.calcAge()
// console.log(akshay)


////Regular function vs Arrow function
// var firstName = 'saurabh'
// const nishank2 = {
//     firstName: 'Nishank',
//     year: 1989,
//     calcAge1: function () {
//         console.log(2021 - this.year)

//         const isMillenial = () => {
//             console.log(this)
//             console.log(this.year >= 1981 && this.year <= 1996)
//         }
//         isMillenial()
//     },
//     greet: () => {
//         console.log(this)
//         console.log(`Hey ${firstName}`)   
//     }
// }

// nishank2.calcAge1()
// nishank2.greet()

///arguments keyword

// const addEpr = function(a, b) {
//     console.log(arguments)
// }

// addEpr(2, 5)
// addEpr(2, 5, 4, 8)

//Arrow function - NOTE: Need to get back to you for the purpose of below functionality 
//In arrow function argument keyword is applicable but in normal function argument keyword takes arhument values
// const addArrow1 = (a, b) => {
//     console.log(arguments)
//     return a + b
// }

// addArrow1(2, 5)

///Primitive vs. Objects in practices
//primitive types
let lastName = 'Yadav';
let oldLastName = lastName;
lastName = 'Kumar';
console.log(lastName, oldLastName)

//Reference types
const nishank = {
    firstName: 'Nishank',
    lastName: 'Yadav',
    age: 32,
};

const marriedNishank = nishank;

marriedNishank.lastName = 'kumar';
console.log('Before marriage', nishank)
console.log('After marriage', marriedNishank)
console.log(marriedNishank)

///Copying Object

const nishank2 = {
    firstName: 'Nishanky',
    lastName: 'Yadavy',
    age: 32,
    family: ['Saurabh', 'Runish'],
};

const nishank2Copy = Object.assign({}, nishank2);
nishank2Copy.lastName = 'Singh';

nishank2Copy.family.push('Akshay')
nishank2Copy.family.push('Jatin')
console.log(nishank2Copy)
console.log(nishank2)