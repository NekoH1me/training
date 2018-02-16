var Ball = require('.../Task1/Ball.js').Ball;
var SomeBallDecorator = require('.../Task1/SomeBallColor.js').SomeBallDecora;
var LineBallDecorator = require('.../Task1/SomeBallLine.js').LineBallDecorator;

console.log('Task1');
console.log(new Ball().getDescription ()); //ball
console.log(new SomeBallLine(new SomeBallColor(new Ball())).getDescription ()); // red ball with lines