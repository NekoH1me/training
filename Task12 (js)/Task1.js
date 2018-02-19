var Ball = require('.../Task1/Ball.js').Ball;
var SomeBallColor = require('.../Task1/SomeBallColor.js').SomeBallColor;
var SomeBallLine = require('.../Task1/SomeBallLine.js').SomeBallLine;

console.log('Task1');
console.log(new Ball().getDescription ()); //ball
console.log(new SomeBallLine(new SomeBallColor(new Ball())).getDescription ()); // red ball with lines