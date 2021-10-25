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
var averageDolphins = calcAverage(85, 54, 41);
var averageKoalas = calcAverage(23, 34, 27);
console.log(averageDolphins, averageKoalas);

function checkWinner(averageDolphins, averageKoalas) {
if (averageDolphins >= 2 * averageKoalas) {
    console.log(`Dolphins win ${averageDolphins} vs. ${averageKoalas}`);
} else if (averageKoalas >= 2* averageDolphins) {
    console.log(`Koalas win ${averageKoalas} vs. ${averageDolphins}`);
} else {
    console.log('No team won');
}
}
checkWinner(averageDolphins, averageKoalas);
    