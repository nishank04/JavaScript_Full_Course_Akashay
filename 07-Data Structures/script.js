'use strict';

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

    orderDelivery: function ({starterIndex, mainIndex, time, address}) {
        console.log(`Order received! ${this.mainMenu[mainIndex]} will be delieverd to ${address} at ${time}`)
    }
}

restaurant.orderDelivery({
    time: '19:40',
    address: 'Uppal Southend',
    mainIndex: 2,
    starterIndex: 2
})


const {name, openingHours, categories} = restaurant
console.log(name, openingHours, categories)

const {name: restaurantName, openingHours: hours,categories: tags,} = restaurant;

console.log(restaurantName, hours, tags)

//Default values object
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters)

//Mutating Variables

let a = 111
let b = 999
const obj = {a: 32, b: 7, c: 14};
({a, b} = obj);
console.log(a, b)

///Nested Object
const {fri} = openingHours;
console.log(fri)

const {fri: {open: o, close: c}} = openingHours
console.log(o, c)


//Array destructuring
// const arr= [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr
// console.log(x,y, z)

// const [first, second] = restaurant.categories;
// console.log(first, second)

//Switching variables

let [main, ,secondary] = restaurant.categories;
console.log(restaurant.categories);
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main]
console.log(main, secondary)

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse)

//Nested Destructuring
const nested = [2, 4, [5, 6]]
//const [i, , j] = nested
const [i, ,[ k,j]] = nested
console.log(i,k, j)

//Default Values Arrays
const [p = 1, q = 2, r = 1] = [8, 9]
console.log(p, q, r)