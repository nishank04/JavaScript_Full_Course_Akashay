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

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '17:24', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delieverd to ${address} at ${time}`)
    }
}

restaurant.orderDelivery({
    time: '19:40',
    address: 'Uppal Southend',
    mainIndex: 2,
    starterIndex: 2
})

restaurant.orderDelivery({
    address: 'Uppal Southend',
    starterIndex: 1,
})

///Spread Operator(...)
const arr = [7, 8, 9, 10, 11];
const badArray = [1, 2, arr[0], arr[1], arr[2]];

const newArray = [1, 2, ...arr];
console.log(newArray)


const newMenu = [...restaurant.mainMenu, 'Noodles'];
console.log(newMenu)

//Copy Arrays
const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy)

//Joining 2 arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu1)


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

/*
Q1 Write a function called displayName() that takes an object as an argument and 
prints the person's first and last name.
Use object destructuring in the function argument. 
And also, use template strings when printing the first and last name.

Q2 Write a function called calculateSalesTotals() which returns an array with new two new keys (sale and total).
The key 'sale' equals the calculated sale price based on the original price and the discount.
The key 'total' equals the computed total based on stock, the original price and the discount.
You have to use Object Destructuring on the objects in the sales array and Object Default Values for the discount key.
The default value would be 0.0.

const sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];
EXPECTED OUTPUT (array of objects):
[
  {
    item: "PS4 Pro",
  	original: 399.99,
  	sale: 399.99,
  	stock: 3,
  	total: 1199.97
  },
  {
  	discount: 0.1,
  	item: "Xbox One X",
  	original: 499.99,
  	sale: 449.991,
  	stock: 1,
  	total: 449.991
  },
  {
  	item: "Nintendo Switch",
  	original: 299.99,
  	sale: 299.99,
  	stock: 4,
  	total: 1199.96
  },
  {
  	discount: 0.8,
  	item: "PS2 Console",
  	original: 299.99,
  	sale: 59.99799999999999,
  	stock: 1,
  	total: 59.99799999999999
  },
  {
  	discount: 0.65,
  	item: "Nintendo 64",
  	original: 199.99,
  	sale: 69.9965,
  	stock: 2,
  	total: 139.993
  }
]*/

//Solution 2
function calculateSalesTotals(sales) {
    let updatedSales = sales.map(sale=>{
        let {original, stock, discount=0.0} = sale;
        sale['sale'] = original - original * discount;
        sale['total'] = sale.sale*sale.stock;
        return sale;
    });
    return updatedSales;
}
const sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  let updatedSales = calculateSalesTotals(sales)
  console.log(updatedSales)
//Solution 1
const student = {
    firstName: 'Akshay',
    lastName: 'Chaturvedi',
}

function displayName({firstName, lastName}){
    console.log(`${firstName} ${lastName}`);
  }
  
  displayName(student);
