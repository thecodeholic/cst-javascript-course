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
ctx.fillStyle = 'red';
ctx.fillRect(50, 150, 100, 50)

// strokeRect
ctx.strokeStyle = 'green';
ctx.lineWidth = 4;
ctx.strokeRect(200, 50, 100, 50);

// clearRect
ctx.clearRect(55, 55, 90, 40);

// fillText
ctx.font = '36px Arial';
ctx.fillStyle = 'purple';
ctx.fillText("Hello World", 200, 200)

// strokeText
ctx.lineWidth = 1;
ctx.strokeText("Hello World", 200, 250);

// Paths   beginPath, moveTo, lineTo, closePath, stroke, fill
// ==============
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(300, 300);
ctx.lineTo(300, 400);
ctx.closePath();
ctx.stroke();

// Arcs
// ====================
ctx.beginPath();
ctx.lineWidth = 4;
ctx.arc(100, 300, 50, 0, 2 * Math.PI);
ctx.fill();

// Draw image
// ====================

// Write text
// ====================

// Ball animation