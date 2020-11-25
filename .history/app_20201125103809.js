// What is canvas?
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
// https://www.w3schools.com/html/html5_canvas.asp
// https://www.w3schools.com/graphics/canvas_intro.asp
// https://www.w3schools.com/graphics/canvas_reference.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

// How to create it and use it
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw rectangles
// =================
// fillRect
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 50);

// ctx.translate(100, 100)
// ctx.rotate(degToRad(20))
ctx.translate(100, 100);
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 100, 50);

function degToRad(deg) {
    return (Math.PI/180) * deg;
}

// // strokeRect
// ctx.strokeStyle = 'green';
// ctx.lineWidth = 4;
// ctx.strokeRect(200, 50, 100, 50);

// // clearRect
// ctx.clearRect(55, 55, 90, 40);

// // fillText
// ctx.font = '36px Arial';
// ctx.fillStyle = 'purple';
// ctx.fillText("Hello World", 200, 200)

// // strokeText
// ctx.lineWidth = 1;
// ctx.strokeText("Hello World", 200, 250);

// // Paths   beginPath, moveTo, lineTo, closePath, stroke, fill
// // ==============
// ctx.beginPath();
// ctx.moveTo(200, 300);
// ctx.lineTo(300, 300);
// ctx.lineTo(300, 400);
// ctx.closePath();
// ctx.stroke();

// // Arcs
// // ====================
// ctx.beginPath();
// ctx.lineWidth = 4;
// ctx.arc(100, 300, 50, 0, 2 * Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);
// ctx.stroke();

// Draw image
// ====================
// const image = new Image();
// image.src = 'char.png';
// image.onload = function() {
//     canvas.width = 100;
//     canvas.height = 100;
//     ctx.drawImage(image, 0, 0);
//     const data = ctx.getImageData(130, 130, 30, 30);
//     console.log(data);
//     ctx.putImageData(data, 200, 200);
// }

// Write text
// ====================

// Ball animation
// const ball = {
//     x: 100,
//     y: 100,
//     r: 20,
//     dx: 0,
//     dy: 0
// };


// function clear(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
// }

// function drawBall() {
//     clear();
//     ctx.beginPath();

//     if (ball.x + ball.r >= canvas.width || ball.x - ball.r <= 0) {
//         ball.dx *= -1;
//     }
//     if (ball.y + ball.r >= canvas.height || ball.y - ball.r <= 0) {
//         ball.dy *= -1;
//     }

//     ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
//     ctx.fillStyle = 'green'
//     ctx.fill();

//     ball.x += ball.dx;
//     ball.y += ball.dy;
// }

// function update() {
//     drawBall();
    
//     requestAnimationFrame(update);
// }

// document.addEventListener('keydown', function(ev) {
//     console.log(ev);
//     if (ev.key === 'ArrowRight') {
//         ball.dx = 3;
//     } else if (ev.key === 'ArrowLeft') {
//         ball.dx = -3;
//     } else if (ev.key === 'ArrowUp') {
//         ball.dy = -3;
//     } else if (ev.key === 'ArrowDown') {
//         ball.dy = 3;
//     }

// });

// document.addEventListener('keyup', function() {
//     ball.dx = 0;
//     ball.dy = 0;
// })

// update();