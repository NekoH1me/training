  function Ball(ball) {
    this.ball = ball;
  }

  Ball.prototype.getDescription = function () {
    return 'ball';
  }

  module.exports = Ball;