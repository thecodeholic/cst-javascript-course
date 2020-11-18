// =============================================================
// REGEXP
// =============================================================
// Creating regexp
// const r = /abc/;
// const tmp = 'abc';
// const r = new RegEx(tmp)

// Testing for matches
// const text = "ABCdefg abc df dg dh";
// const r = /abc/ig;
// const match = text.match(r);
// console.log(match);

// .search(), .replace()
// const found = text.search(/d\w/);
// console.log(found);
// const newText = text.replace(/d\w/g, 'abc')
// console.log(newText);
// .test()
// console.log(r.test(text));

// .exec()
// const result = r.exec(text);
// console.log(result);

// .match

// Flags/Modifiers
// console.log(r.exec(text));
// console.log(text.match(r));

// Character sets
/*
[0-9]
[a-Z]
[A-Z]
\d
\w
\s
\D
\W
\S
.
*/
// const text = "defg abc 7 df dg dh";
// const r = /\S/;
// console.log(r.test(text));

// Write regexp to match Date 04/11/2020 10:00
// const text = 'Hello my name is Zura. My birthday is 31/01/1992 10:00'
// const r = /\d\d\/\d\d\/\d\d\d\d\s+\d\d:\d\d/
// console.log(text.match(r));

// Exclude matching [^abc]
// const text = 'Hello my name is o 9 l Zura.'
// const r = /[^lo9]/g
// console.log(text.match(r));

// Repeaters
/*
+
*
?
{2, 8}
*/
// const text = 'Hello my name is Zura. My birthday is 31/01/92 10:00'
// const r = /\d{2}\/\d{2}\/\d{,2}\s?\d\d:\d\d/
// console.log(text.match(r));


// Grouping
// const text = 'Hello my name is Zura. My birthday is 31/01/1992 10:00'
// const r = /(\d{2})\/(\d{2})\/(\d{4})\s?\d\d:\d\d/;
// const match = text.match(r);
// console.log(match);

// console.log(new Date(match[3], match[2] - 1, match[1]));

// Boundaries: \b ^ $
// const phone = '+995 557 123456';
// const r = /^\+\d{3}\s+\d{3}\s+\d{6}/;
// const match = phone.match(r);
// console.log(match);

// Choise patterns
// const text = 'Lorem isum ragac apple. loremip orange, banana';

// const r = /(apple|orange|banana)/g;
// console.log(text.match(r));

// Match text 

// https://regexone.com/
// Good resources to practice
// https://regex101.com/
// https://regexr.com/
// https://javascript.info/regexp-lookahead-lookbehind

// =============================================================
// Errors
// =============================================================

// "use strict"; Using undeclared variable, using this inside constructor function

// try/catch

// class InputError extends Error {}

// try {
//     throw new InputError("Test")
// } catch(e) {
//     if (e instanceof InputError) {
//         console.log("Input errpr");
//     } else {
//         console.log(e);
//     }
// }

// throw new Error

// Create InputError class



// =============================================================
// Modules
// =============================================================
// ES5 modules: Create math module

// const mathFn = function math(){
//     return {
//         add: (a, b) => a + b,
//     }
// }
// console.log(mathFn);

// const math = mathFn();
// console.log(math.add(1, 2));



// ES6 modules: create separate file for module
import r, {add as addition, PI} from './math.js';

console.log(r, PI, addition(1, 4));


// Name export

// Default export (One per module)

// Mixed Name & default

