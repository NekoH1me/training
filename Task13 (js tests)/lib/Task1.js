var Ball = require('../Task1/Ball.js');
var SomeBallColor = require('../Task1/SomeBallColor.js');
var SomeBallLine = require('../Task1/SomeBallLine.js');

console.log('Task1');
console.log(new Ball().getDescription ()); //ball
console.log(new SomeBallLine(new SomeBallColor(new Ball())).getDescription ()); // red ball with lines