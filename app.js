'use strict';
// // function createPerson()
// function createPerson(name, surname, age) {
//     return {
//         name,
//         surname,
//         age
//     }
// }
// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.hello = function(){
//         return `Hello I am ${this.name}`;
//     }
// }
// // Execute any function with new keyword
// const p = new Person('George', 'Labadze', 27);
// // console.log(p.hello());
// // console.log(p);

// // this keyword
// // console.log(this);

// function test() {
//     console.log("Function called");
//     console.log(this);
// }
// // test();
// function hello(age, b, c) {
//     return `Hello I am ${this.name} - ${age}`;
// }

// const person = {
//     name: 'Zura',
//     surname: 'Sekhniashvili',
//     hello
// };
// console.log(person.hello());


// call(), bind(), apply()
// test.call({p});

//  console.log(hello.call(person2, 28, 29, 30))
//  // the same as
//  console.log(hello.apply(person2, [28, 29, 30]))

// function hello() {
//     console.log(this);
//     return `Hello I am ${this.name}`;
// }
// const person = {
//     name: 'Zura',
//     surname: 'Sekhniashvili',
// };
// const person2 = {
//     name: 'George',
//     surname: 'Labadze',
// }
// const newHello = hello.bind(person);
// console.log(newHello());
// hello.bind(person)


// // ES6 classes, properties, methods
// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }

//     hello() {
//         return `Hello from ${this.name}`
//     }

//     static staticMethod(){
//         console.log("I am static");
//     }

//     get fullName(){
//         return `${this.name} ${this.surname}`
//     }

//     set fullName(name) {
//         const parts = name.split(' ');
//         this.name = parts[0];
//         this.surname = parts[1];
//     }
// }
// const p = new Person('George', 'Labadze', 28);
// console.log(p.hello());
// console.log(p.fullName);
// p.fullName = 'Zura Sekhniashvili';
// console.log(p.name);
// Person.staticMethod();
// // Static, getters, setters

// // Inheritance: Example of person
// class Student extends Person {
//     constructor(name, surname, age, studentId) {
//         super(name, surname, age);
//         this.studentId = studentId;
//     }

//     hello() {
//         const parentHello = super.hello()
//         return `${parentHello} - I am Student`;
//     }
// }
// const s = new Student('George', 'Mskhiladze', 23, 1234);
// console.log(s.hello());
// console.log(s.studentId);
// ES5 classes - constructor functions, prototype

function Person(name) {
    this.name = name;
}
Person.prototype.surname = 'Doe';
Person.prototype.hello = function(){
    console.log("hello");
}
const p = new Person('George');
const p2 = new Person('Mari');
const p3 = new Person('Brad');
// console.log(p.name);
// console.log(p.surname);
// console.log(p);
// p.hello();
// Person.prototype.hello = function(){
//     console.log(`Hello I am ${this.name}`);
// }
// p.hello();
// p2.hello();
// p3.hello();

// function Student(name, studentId) {
//     Person.apply(this, [name]);
//     this.studentId = studentId;
// }
// Student.prototype = Object.create(Person.prototype)
// // Student.prototype.constructor = Student;
// const s = new Student('Zura', 1234);
// console.log(s instanceof Student);
// console.log(s.hello(), s.constructor);

// const s2 = new s.constructor()
// console.log(s2);

// Object.defineProperty()
// const person = {
//     name: 'Zura'
// };

// Object.defineProperty(person, 'age', {
//     writable: false,
//     configurable: true,
//     enumerable: false
// });
// for (let key in person) {
//     console.log(key);
// }

// console.log(person.age);


// Add a new method findById() in Array.prototype
Array.prototype.findById = function(id) {
    return this.find(el => el.id == id);
}
const users = [
    { id: 1, username: 'zura' },
    { id: 2, username: 'brad' },
    { id: 3, username: 'john' },
];
console.log(users.findById(2));