// 3 ways to add event listener on element, advantages of each

function onClick(){
    alert("alert")
}

// const button = document.querySelector('button');
// button.onclick = () => {
//     alert("onclick");
// };
// button.onclick = () => {
//     alert('onclick 2')
// }

// button.addEventListener('click', () => {
//     alert('Add event listener')
// })
// button.addEventListener('click', () => {
//     alert('Add event listener 2')
// })


// Event Object

// button.addEventListener('mousedown', (event) => {
//     console.log(event);
//     let div = document.querySelector('.hover-div');
//     if (div) {
//         div.remove();
//     }
//     div = document.createElement('div');
//     div.className = 'hover-div';
//     div.style.position = 'absolute';
//     div.style.width = '100px';
//     div.style.height = '50px';
//     div.style.background = 'yellow';
//     div.style.left = event.layerX+'px';
//     div.style.top = event.layerY+'px';
//     div.innerHTML = 'Hello Javascript';
//     document.body.appendChild(div)
// })

// Mouse events, event.target
// click, mousedown, mouseup, mousehover


// Propogation
// const body = document.body;
// body.addEventListener('click', () => {
//     console.log("Body clicked");
// })
// const button = document.querySelector('button');
// button.addEventListener('click', (ev) => {
//     console.log("Button clicked 1");
//     ev.stopPropagation();
//     ev.stopImmediatePropagation();
// })
// button.addEventListener('click', (ev) => {
//     console.log("Button clicked 2");
//     // ev.stopImmediatePropagation();
// })

// Default actions: click on a, form submission
// const links = document.querySelectorAll('a');
// links.forEach(a => {
//     a.addEventListener('click', ev => {
//         ev.preventDefault();
//         console.log(ev.target.getAttribute('href'));
//         window.location.hash = ev.target.getAttribute('href');
//     })
// });

// const form = document.querySelector('form');
// form.addEventListener('submit', ev => {
//     ev.preventDefault();
//     console.log("Form submitted ", ev.target);
//     const data = {};
//     const inputs = ev.target.querySelectorAll('input');
//     console.log(inputs);
//     inputs.forEach(input => {
//         data[input.name] = input.value;
//     })
//     console.log(data);
// });

// Key events
// document.addEventListener('keydown', (ev) => {
//     console.log("keydown ", ev);
//     ev.preventDefault();
// })
// document.addEventListener('keyup', (ev) => {
//     console.log("keyup ", ev);
// })
// document.addEventListener('keypress', (ev) => {
//     console.log("keypress ", ev);
// })

// scroll, resize, hashchange
// window.addEventListener('scroll', (ev) => {
//     console.log(document.querySelector('html').scrollTop);
// })
// window.addEventListener('resize', (ev) => {
//     console.log(window.outerHeight);
// })
// window.addEventListener('hashchange', (ev) => {
//     console.log(window.location.hash);
// })

// Timers
// const timout = setTimeout(() => {
//     console.log("Executed setTimout");
// }, 5000);
// clearTimeout(timout);
// // setInterval
// const interval = setInterval(() => {
//     console.log("setInterval ");
// }, 1000);

// Debouncing
// let timeout;
// const textarea = document.querySelector('textarea');
// textarea.addEventListener('input',  ev => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => console.log(ev.target.value), 500);
// })

// Event bubling
// const body = document.body;
// body.addEventListener('click', () => {
//     console.log("Body clicked");
// })
// const button = document.querySelector('button');
// button.addEventListener('click', (ev) => {
//     console.log("Button clicked 1");
// })

// Event capturing

// const body = document.body;
// body.addEventListener('click', (ev) => {
//     console.log("Body clicked");
//     ev.stopPropagation()
// }, {capture: true})
// const button = document.querySelector('button');
// button.addEventListener('click', (ev) => {
//     console.log("Button clicked 1");
// }, {capture: true})

