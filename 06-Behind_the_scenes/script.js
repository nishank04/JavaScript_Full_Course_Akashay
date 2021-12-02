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
if (!numProducts) deleteShoppingCart();

var numProducts = 10

function deleteShoppingCart() {
    console.log(`All products are deleted`)
}

//tio be covered in next class
// var x = 1;
// let y = 2;
// const z = 3

// console.log(x === window.x)
// console.log(x === window.y)
// console.log(x === window.z)

//this keyword
//console.log(this)

// const calcAge = function (birthyear) {
//     console.log(2021 - birthyear)
//     console.log(this)
// }
// calcAge(1989)

const calcArrow = birthyear => {
    console.log(2021 - birthyear)
    console.log(this)
}

calcArrow(1989)

const nishank = {
    year: 1989,
    calcAge: function () {
        console.log(this)
        console.log(2021 - this.year)
    },
}
nishank.calcAge()