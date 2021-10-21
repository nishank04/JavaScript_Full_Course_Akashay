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
// const now = 2037;
// const ageNishank = now - 1989;
// const ageAkshay = now - 2018;

// console.log(now - 1989 > now - 2018);

// let x , y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageNishank + ageAkshay) / 2; // BODMAS
// console.log(ageNishank, ageAkshay, averageAge);

// ///Strings and Template Literals
// const firstName = 'Akshay';
// const job = 'businessmen';
// const birthYear = 1978;
// const year = 2037;

// const akshay = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(akshay);

// const akshayNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(akshayNew);

// console.log(`String with \n\ multiple \n\ lines`);
// console.log(`String with
//  multiple 
//  lines`);

 ////Taking Decisions: if / else statements

//  const age =  2;

//  if(age >= 18) {
//      console.log('Akshay can get driving Liscence')
//  } else {
//      const yearsLeft = 18 - age
//      console.log(`Akshay is too young, wait another ${yearsLeft} years.`)
//  }

//  const birthYear = 2012;
//  let century;
//  if(birthYear <= 2000) {
//      century = 20;
//  } else {
//      century = 21;
//  }
 
//  console.log(century)

////////////////////////////////////////
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
// }

////Type Conversion and Coercion

//Type conversion
// const inputYear = '1919';
// //const str = 'Hello World';
// //const newStr = Number(str);
// const newInputYear = Number(inputYear);
// console.log(Number(inputYear), inputYear);
// console.log(Number('Nishank'));
// console.log(typeof NaN);
// const str = 23;
// console.log(typeof str)
// console.log(String(str), 23);
// console.log(typeof (String(str)));

// ///type coercion
// console.log('I am ' + ('23' +  23) + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1; // 11
// n = n - 1;
// console.log(n);

////Truth and False

//5 Falsy values -  0, '',undefined, null, Nan
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Akshay'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = undefined;
// if (money) {
//     console.log(`Don't spent it all!!`)
// } else{
//     console.log(`You should get a job!`)
// }

// let height = 0;

// if (height) {
//     console.log(`Yay!! height is defined`)
// }else{
//     console.log('Height is undefined');
// }

///Equality Operators
//const age = '18';
//if (age === 18) console.log('You justy become an adult');

//if (age == 18) console.log('You justy become an adult');

// const favourite = prompt('What is your favourite number?')
// console.log(favourite);
// console.log(typeof favourite);

// if ( '23' == 23) {
//     console.log('they are equal')
//  } 
//else if (favourite == 7){
//     console.log('7 is also a cool number')
// } else if (favourite == '9') {
//     console.log('9 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7 or 9')
// }

/////Logical Operators
// const hasDrivingLicense = true;
// const hasGoodVision = false;
// const isTired = true;
// console.log(hasDrivingLicense && hasGoodVision)
// console.log(hasDrivingLicense || hasGoodVision)

// console.log(hasDrivingLicense || hasGoodVision || isTired)
// console.log(hasDrivingLicense && hasGoodVision && isTired)

///Coding Challenge

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy ');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// // BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy ');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy ');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy ');
// }

////The switch statement

// const day = 'friday';

// switch (day) {
//   case 'monday': //day ==='monday'
//     console.log('Plan course structure');
//     console.log('Go to meetups');
//     break;
//   case 'tuesday':
//     console.log('Prepare food');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Writing Code');
//     break;
//   case 'friday':
//     console.log('Watch movie');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid option');
// }
///Condiotional (ternary) operators

// const age = 23;
//   age >=18 ? console.log('I like to drink') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// h = (c == 0) //is c = 0
//     ? null //then return 'null', else...
//     : (v == r) //is v = r?
//     ? (g - b) / c // then return this value, else...
//     : (v == g) //is v = g?
//     ? (b -r) / c +2  //then return this value
//     : (r - g) / c +4 // otherwise this default value

// var h;

// if (c == 0)
//   h = null;
// else if (v ==r)
//   h = (g - b) / c;
// else if (v == g)
//   h = (b -r ) / c +2;
// else
//   h = (r-g) / + 4;

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 

*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
// const bill = 430;

// let tip = (bill >= 50 && bill <= 300) ? console.log(`The bill was bill the tip was ${bill*.15} and the total value is ${bill+tip}.`) : console.log(`The bill was bill the tip was  ${bill*.2} and the total value is ${bill+tip}.`);
