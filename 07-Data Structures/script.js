// 'use strict';

const restaurant = {
    name: 'Akshay Restaurant',
    location: 'Sector 23, huda market, near North Cap university',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Broschetta', 'Garlic Bread', 'Carpese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    },
    order: function (starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '17:24', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delieverd to ${address} at ${time}`)
    },

    orderPasta(ing1, ing2, ing3){
        console.log(`Here is your dekicious pasta with ${ing1}, ${ing2}, ${ing3}`)
    }
}

const ingredients = [prompt(`Let's make pasta! Ingridient 1?`),
prompt("ingridient 2"),
prompt("ingredient 3")]

console.log(ingredients)
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
restaurant.orderPasta(...ingredients)

// restaurant.orderDelivery({
//     time: '19:40',
//     address: 'Uppal Southend',
//     mainIndex: 2,
//     starterIndex: 2
// })

// restaurant.orderDelivery({
//     address: 'Uppal Southend',
//     starterIndex: 1,
// })

// ///Spread Operator(...)
// const arr = [7, 8, 9, 10, 11];
// const badArray = [1, 2, arr[0], arr[1], arr[2]];

// const newArray = [1, 2, ...arr];
// console.log(newArray)


// const newMenu = [...restaurant.mainMenu, 'Noodles'];
// console.log(newMenu)

// //Copy Arrays
// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(mainMenuCopy)

// //Joining 2 arrays
// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu1)


// const {name, openingHours, categories} = restaurant
// console.log(name, openingHours, categories)

// const {name: restaurantName, openingHours: hours,categories: tags,} = restaurant;

// console.log(restaurantName, hours, tags)

// //Default values object
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters)

// //Mutating Variables

// let a = 111
// let b = 999
// const obj = {a: 32, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a, b)

// ///Nested Object
// const {fri} = openingHours;
// console.log(fri)

// const {fri: {open: o, close: c}} = openingHours
// console.log(o, c)


// //Array destructuring
// // const arr= [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr
// // console.log(x,y, z)

// // const [first, second] = restaurant.categories;
// // console.log(first, second)

// //Switching variables

// let [main, ,secondary] = restaurant.categories;
// console.log(restaurant.categories);
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main]
// console.log(main, secondary)

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse)

// //Nested Destructuring
// const nested = [2, 4, [5, 6]]
// //const [i, , j] = nested
// const [i, ,[ k,j]] = nested
// console.log(i,k, j)

// //Default Values Arrays
// const [p = 1, q = 2, r = 1] = [8, 9]
// console.log(p, q, r)

// /*
// Q1 Write a function called displayName() that takes an object as an argument and 
// prints the person's first and last name.
// Use object destructuring in the function argument. 
// And also, use template strings when printing the first and last name.

// Q2 Write a function called calculateSalesTotals() which returns an array with new two new keys (sale and total).
// The key 'sale' equals the calculated sale price based on the original price and the discount.
// The key 'total' equals the computed total based on stock, the original price and the discount.
// You have to use Object Destructuring on the objects in the sales array and Object Default Values for the discount key.
// The default value would be 0.0.

// const sales = [
//   { item: 'PS4 Pro', stock: 3, original: 399.99 },
//   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];
// EXPECTED OUTPUT (array of objects):
// [
//   {
//     item: "PS4 Pro",
//   	original: 399.99,
//   	sale: 399.99,
//   	stock: 3,
//   	total: 1199.97
//   },
//   {
//   	discount: 0.1,
//   	item: "Xbox One X",
//   	original: 499.99,
//   	sale: 449.991,
//   	stock: 1,
//   	total: 449.991
//   },
//   {
//   	item: "Nintendo Switch",
//   	original: 299.99,
//   	sale: 299.99,
//   	stock: 4,
//   	total: 1199.96
//   },
//   {
//   	discount: 0.8,
//   	item: "PS2 Console",
//   	original: 299.99,
//   	sale: 59.99799999999999,
//   	stock: 1,
//   	total: 59.99799999999999
//   },
//   {
//   	discount: 0.65,
//   	item: "Nintendo 64",
//   	original: 199.99,
//   	sale: 69.9965,
//   	stock: 2,
//   	total: 139.993
//   }
// ]*/

// //Solution 2
// function calculateSalesTotals(sales) {
//     let updatedSales = sales.map(sale=>{
//         let {original, stock, discount=0.0} = sale;
//         sale['sale'] = original - original * discount;
//         sale['total'] = sale.sale*sale.stock;
//         return sale;
//     });
//     return updatedSales;
// }
// const sales = [
//     { item: 'PS4 Pro', stock: 3, original: 399.99 },
//     { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//     { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//     { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//     { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
//   ];
//   let updatedSales = calculateSalesTotals(sales)
//   console.log(updatedSales)
// //Solution 1
// const student = {
//     firstName: 'Akshay',
//     lastName: 'Chaturvedi',
// }

// function displayName({firstName, lastName}){
//     console.log(`${firstName} ${lastName}`);
//   }
  
//   displayName(student);

//   ///////////////////////////////////////
// // Coding Challenge #1

// /* 
// We're building a football betting app (soccer for my American friends)!

// Suppose we get data from a web service about a certain game (below). 
// In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. 
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') 
// with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. 
// So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names 
// (NOT an array) and prints each of them to the console, 
// along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
// WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// */

// // 1.
// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// // // 2.
// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // // 3.
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // // 4.
// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // // 5.
// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;
// // console.log(team1, draw, team2);

// // // 6.
// // const printGoals = function (...players) {
// //   console.log(players);
// //   console.log(`${players.length} goals were scored`);
// // };
// // // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // // printGoals('Davies', 'Muller');
// // printGoals(...game.scored);

// // // 7.
// // team1 < team2 && console.log('Team 1 is more likely to win');
// // team1 > team2 && console.log('Team 2 is more likely to win');

// //Rest Pattern
// //1) Destructuring
// //spread, because it's on the right side of equal to sign
// const arr1 = [1,2,3,4,...[5,6]]
// console.log(arr1)
// //REST Pattern, because it's on the left hand side of equal to sign
// const [a1,b1, ...others] = [1,2,3,4]
// console.log(a1,b1, ...others)
// console.log(...others)

// //Arrays
const [Pizza, Risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(otherFoods)
console.log([...restaurant.mainMenu, ...restaurant.starterMenu])

//Objects
const {sat, ...weekdays} = restaurant.openingHours
console.log(weekdays)

//functions
const add = function (...numbers) {
    let sum = 0;
    for(let i =0; i<numbers.length; i++){
        sum += numbers[i];
        console.log(sum)
    }
}

// add(2, 3)
// add(5, 3, 7, 2)
// add(5, 3, 7, 2)

const x = [23, 5, 7]
add(...x)

var arr2 = [1,2,3,4,5]
var sum = 0;
for (var i in arr2){
    sum += arr2[i]
    console.log(sum)
}

