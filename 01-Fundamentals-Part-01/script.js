// ///COnsoling things in javasript with console.log inbuild methos in javascript
// console.log(`My first jaavscript program - hello Mate!`);

// ///Values and variables
// console.log('Akshay');
// console.log(32);

// let firstName = "Akshay";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

//Variable name convention
// let firstName = 'VM';
// let $function = 27;
// let person= "Akshay";
// let PI = 3.14;
// let myFirstName = "Akshay";
// let bike1
// let bike2

//Data types

// let jaavscriptIsFun = true;
// //console.log(jaavscriptIsFun);

// console.log(typeof jaavscriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Akshay');

// jaavscriptIsFun = 'Yes!';
// console.log(typeof jaavscriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);
// year= 1989;
// console.log(typeof year);
// console.log(typeof null);

// ///let, const and var
// let age = 32;
// age = 31;
// console.log(age);

// const birthYear = 1989;
// //birthYear = 1990;
// console.log(birthYear);

// var job = 'programmer';
// job = 'teacher';
// console.log(job);

// //Basic Operator
// //Math Operators
// const now = 2021;
// const ageNishank = now - 1989;
// const ageAkshay = now - 1979;
// console.log(ageNishank, ageAkshay);

// console.log(ageNishank * 2, ageAkshay / 10, 2 ** 3); 
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Akshay';
// const lastName = 'Smith';
// console.log(firstName + ' ' + lastName);

// //Assignment Operators
// let x = 10 + 5;
// x += 10; //x = x + 10 = 25
// x *= 4 //x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

//Comparison Operators
// console.log(ageNishank > ageAkshay);
// console.log(ageNishank > 18);

// const isFullAge = ageNishank >= 33;
// console.log(isFullAge);

///Operator Precedence
const now = 2037;
const ageNishank = now - 1989;
const ageAkshay = now - 2018;

console.log(now - 1989 > now - 2018);

let x , y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageNishank + ageAkshay) / 2; // BODMAS
console.log(ageNishank, ageAkshay, averageAge);

///Strings and Template Literals
const firstName = 'Akshay';
const job = 'businessmen';
const birthYear = 1978;
const year = 2037;

const akshay = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(akshay);

const akshayNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(akshayNew);

console.log(`String with \n\ multiple \n\ lines`);
console.log(`String with
 multiple 
 lines`);
