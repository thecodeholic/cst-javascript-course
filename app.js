// document.write
document.write('Hello world');
document.write('Hello world');
document.write('Hello world');
document.write('<button>submit</button>');

// Accessing elements
/*
getElementById
getElementsByTagName
getElementsByClassName
querySelector
querySelectorAll
*/
/*
const myDiv = document.getElementById('myDiv');
console.log(myDiv);

const ps = document.getElementsByTagName('p');
console.log(ps);

const c1s = document.getElementsByClassName('c1');
console.log(c1s);

const button = document.querySelector('div button');
console.log(button);

const buttons = document.querySelectorAll('div button');
console.log(buttons);
*/

// Accessing properties of element
/*
nodeName
nodeType
tagName
className
classList
*/
const body = document.body;
/*
console.log(body);
console.log(body.nodeName);
console.log(body.tagName);
console.log(body.nodeType);
console.log(body.className.split(' '));
console.log(body.classList.contains('header-fixed'));
// body.className += ' test'
body.classList.add('test');
body.classList.remove('nav-fixed');
*/
// Set/Get/Remove attributes
// console.log(body.getAttribute('browser'));
// console.log(body.getAttribute('data-id'));
// body.setAttribute('style', 'color: red')
// console.log(body.getAttributeNames());
// body.removeAttribute('data-id');

// Set/Get innerText
// console.log(body.innerText);
// body.innerText = 'Hello from <b>body</b>';

// Set/Get innerHTML
// console.log(body.innerHTML);
// body.innerHTML = 'Hello from <b>body</b>';

// Change style of the element
/*
const button = document.querySelector('button');
button.style.color = '#FFF';
button.style.padding = '8px 12px';
button.style.backgroundColor = '#15b46a';
button.style.border = '1px solid #0f9556';
button.style.color = '#FFF';
document.body.style.padding = '50px'
/*
// Access children
/*
console.log(document.body.children);
console.log(document.body.childNodes);
console.log(document.body.firstElementChild);
console.log(document.body.firstChild);
console.log(document.body.lastElementChild);
console.log(document.body.lastChild);
const firstChild = document.body.childNodes[0];
const firstElementChild = document.body.children[0];
console.log(firstChild);
*/

// Access parent
const button = document.querySelector('body > button');
// console.log(button.parentElement);
// console.log(button.parentNode);
console.log(button);

// Access siblings

console.log(button.nextSibling);
console.log(button.nextElementSibling);

console.log(button.previousSibling);
console.log(button.previousElementSibling);

// Removing elements: remove, removeChild
// button.remove();
// document.body.children[0].remove();
// document.body.removeChild(document.body.children[0])

// Creating elements with innerHTML
document.body.innerHTML += `<p>Lorem ipsum something</p>`

// document.createTextNode
const newTextNode = document.createTextNode('1234');
console.log(newTextNode);
document.body.appendChild(newTextNode);
newTextNode.textContent = '5678';
document.body.append("1212");

// document.createElement
/*
const input = document.createElement('input');
input.placeholder = 'Enter your password';
input.value = '1234'
input.style.padding = '6px 10px';
input.type = 'password';
input.setAttribute('placeholder', 'Enter something')
// document.body.append(input);

const formButton = document.createElement('button');
formButton.innerHTML = 'Submit';

const form = document.createElement('form');
form.action = 'index.php';
form.method = 'post';
form.append(input);
form.append(formButton);

document.body.append(form);
*/
const form = document.createElement('form');
form.action = 'index.php';
form.method = 'post';
form.innerHTML = `
    <input type="text" value="1234" placeholder="Enter username"/>
    <input type="password" placeholder="Enter password"/>
    <button>Login</button>
`;



// Insert element at last: append, appendChild

// Insert element at first

document.body.insertBefore(form, document.body.children[0])


// Insert element at specific position

document.body.insertBefore(form, document.body.children[5])

// Replace node

const button2 = document.querySelector('button.c1');
const newButton = document.createElement('button');
newButton.innerText = 'New cool button';
newButton.style.color = '#FFF';
newButton.style.padding = '8px 12px';
newButton.style.backgroundColor = '#15b46a';
newButton.style.border = '1px solid #0f9556';
newButton.style.color = '#FFF';

document.body.replaceChild(newButton, button2)

// Event Listeners

newButton.onclick = (ev) => {
    console.log("Click");
    ev.target.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`
}

newButton.addEventListener('mousedown', (ev) => {
    console.log("hover ", ev);
    newButton.style.position = 'absolute';
})

document.body.addEventListener('mousemove', () => {
    
})

function rand() {
    return Math.round(Math.random() * 255)
}