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

// strokeText

// Paths   beginPath, moveTo, lineTo, closePath, stroke, fill
// ==============

// Arcs
// ====================

// Draw image
// ====================

// Write text
// ====================

// Ball animation