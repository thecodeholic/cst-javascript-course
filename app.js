// Creating Arrays
// const colors = ["blue", "green", "red"];
// // const colors = new Array("blue", "green", "red");

// // Accessing elements
// console.log(colors[1]); // green
// console.log(colors[3]); // undefined

// // Printing array length
// console.log(colors.length);

// // Inserting into array
// colors[3] = "Yellow";
// colors[5] = "white";

// console.log(colors.length); // 6
// colors.push("black");
// console.log(colors[6]); // black

// // Removing from array
// colors[1] = undefined;
// console.log(colors);
// delete colors[0];
// console.log(colors);

// Iterating in array
// approach 1
// for (let i = 0; i < colors.length; i++) {
//     if (colors[i]) {
//         console.log(colors[i]);
//     }
// }

// for (let color of colors) {
//     console.log(color);
// }

// for (let [index, color] of colors.entries()) {
//     console.log(`${index} ${color}`);
// }

// Array methods
// iterating
// colors.forEach(function(color, index) {
//     console.log(`${index} ${color}`);
// })
// colors.forEach((color, index) => console.log(`${index} ${color}`))
// Insert from the beginning
// colors.unshift("brown");
// console.log(colors);

// // Make a copy
// const newColors = colors.slice(1, 4);
// console.log(newColors);

// // Insert in the middle
// console.log(colors);
// colors.splice(1, 0, "pink");
// console.log(colors);

// // Remove elements from bottom
// console.log(colors);
// console.log(colors.pop());
// console.log(colors);

// // Remove element from beginning
// console.log(colors);
// console.log(colors.shift());
// console.log(colors);

// Creating Objects
const PI = 3.14;
const person = {
    name: `Zura`,
    age: 28,
    isMale: true,
    hobbies: ["fishing", "hunting"],
    address: {
        city: 'Tbilisi',
        street: 'Varketili'
    },
    'key 1': 'value 1',
    [Math.random()]: 123,
    [1+2]: 123
};
console.log(person);

// Set & get properties
// console.log(person.name);
// console.log(person.hobbies[0]);
// console.log(person['name']);
// console.log(person.address.city);
// console.log(person.address['city']);
// const var1 = 'name'
// console.log(person[var1]);

// person.name = 'James';
// person.salary = 1000;
// delete person.age;
// console.log(person);

// // Iterating object
// for (let key in person) {
//     console.log(key, person[key]);
// }

// // Printing object keys
// console.log(Object.keys(person));
// console.log(Object.values(person));

// for (let [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }

// Arrays of objects
// const todos = [
//     {title: 'Purchase Webcam', completed: false},
//     {title: 'Call to mom', completed: true},
//     {title: 'Create shopping list', completed: false},
// ]

// todos.push({title: 'new todo', completed: true});

// for (let todo of todos) {
//     console.log(`${todo.completed} ${todo.title}`);
// }


// JSON
// const todosJson = JSON.stringify(todos);
// console.log(todosJson);

// const jsonString = `[{"title":"Purchase Webcam","completed":false},{"title":"Call to mom","completed":true},{"title":"Create shopping list","completed":false},{"title":"new todo","completed":true}]`;
// console.log(JSON.parse(jsonString));

// const todoObject = JSON.parse('{"userId": 1,"id": 1,"title": "delectus aut autem","completed": false}');
// const todoObject = JSON.parse("{\"userId\": 1,\"id\": 1,\"title\": \"delectus aut autem\",\"completed\": false}");
// const todoObject = JSON.parse(`
// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }
// `);
// console.log(todoObject);

// High order functions; filter, map, reduce
const products = [
    {name: 'Iphone X', price: 2000},
    {name: 'Dell XPS 15', price: 10000},
    {name: 'Galaxy S20', price: 2500},
    {name: 'Apple airdpods', price: 800},
];

// const newProducts = []
// products.forEach(product => {
//     if (product.price > 1000) {
//         newProducts.push(product)
//     }
// });
// console.log(newProducts);

// const newProducts = products.filter(product => product.price > 1000);
// console.log(newProducts);

// const productTitles = [];
// products.forEach(product => productTitles.push(product.name));
// console.log(productTitles);

// const productTitles = products.map(product => product.name);
// console.log(productTitles);

// const numbers = [1, 2, 3, 4, 5, 6];
// const sum = numbers.reduce((accum, n) => accum + n, 10);
// console.log(sum);

const totalPrice = products
        .filter(p => p.price > 1000) 
        .map(p => p.price) // [2000, 10000, 2500, 800]
        .reduce((accum, price) => accum + price)
        ;

console.log(totalPrice);
