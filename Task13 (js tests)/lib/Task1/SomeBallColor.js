  function SomeBallColor(ball) {
    this.ball = ball;
  }

  SomeBallColor.prototype.getDescription = function () {
    return ('red ' + this.ball.getDescription());
  }
 
  module.exports = SomeBallColor;