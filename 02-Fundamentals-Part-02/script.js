///Functions
// function logger() {
//     console.log(`My name is Nishank`);
// }

// //calling / running / invoking a function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor (apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// ///Function Declaration vs. Function expression
// //Function Declaration
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }


// const age1 = calcAge1(1989);

// ///Function Expression
// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

///Arrow Functions

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Nishank'));

///Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const ornagePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${ornagePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// ///Coding Challenge

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// //checkWinner(scoreDolphins, scoreKoalas);

// // checkWinner(576, 111);

// // // Test 2
// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);
// // console.log(scoreDolphins, scoreKoalas);
//  checkWinner(scoreDolphins, scoreKoalas);


calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3)/3;
}
    
// var averageDolphins = calcAverage(44, 23, 71);
// var averageKoalas = calcAverage(65, 54, 49);
// var averageDolphins = calcAverage(85, 54, 41);
// var averageKoalas = calcAverage(23, 34, 27);
// console.log(averageDolphins, averageKoalas);

// function checkWinner(averageDolphins, averageKoalas) {
// if (averageDolphins >= 2 * averageKoalas) {
//     console.log(`Dolphins win ${averageDolphins} vs. ${averageKoalas}`);
// } else if (averageKoalas >= 2* averageDolphins) {
//     console.log(`Koalas win ${averageKoalas} vs. ${averageDolphins}`);
// } else {
//     console.log('No team won');
// }
// }
// checkWinner(averageDolphins, averageKoalas);
    

///Introduction to Arrays
// const friend1 = 'Tiger';
// const friend2 = 'Micjael';
// const friend3 = 'Teddy';

// const friends = ['Tiger', 'Michael', 'Teddy'];
// console.log(friends);

// const y = new Array(1991, 1989, 1984, 1995);
// console.log(y);

// console.log(friends[2]);
// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Akshay';
// const akshay = [firstName, 'Kumar', 2037 - 1991, 'actor', friends]
// console.log(akshay);
// console.log(akshay.length);

// //exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2021];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 4]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 4]) ];
// console.log(ages);

////Basic Array operations

// const friends = ['Michael', 'Steven', 'Peter'];

// ///Add Elements
// const newLength = friends.push('Jay');
// console.log(newLength);
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

// ///Remove Elements
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Nishank')) {
//    console.log(`You have a friend called Steven`);
// }


// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44*/

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
//   // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  
//   const bills = [125, 555, 44];
//   const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//   const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
  
//   console.log(bills, tips, totals);

  const bill = 100;

function calcTip(bill) {
  if (bill > 50 && bill < 300){
    return  bill*.15;
  } else {
    return bill*.20;
  }
}
const tips = calcTip(bill);
const totalBill = bill + tips;
console.log(totalBill);
