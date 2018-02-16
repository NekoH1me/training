  function SomeBallLine(ball) {
    this.ball = ball;
  }

  SomeBallLine.prototype.getDescription = function () {
    return (this.ball.getDescription() + ' with lines');
  }
 
  module.exports = SomeBallLine;