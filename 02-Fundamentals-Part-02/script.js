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

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Nishank'));

///Deepika Narayan Bhardawaj