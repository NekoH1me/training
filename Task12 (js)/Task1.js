console.log('Task1');

  function Ball(ball) {
    this.ball = ball;
  }

  Ball.prototype.getDescription = function () {
    return 'ball';
  }

  function SomeBallColor(ball) {
    this.ball = ball;
  }

  SomeBallColor.prototype.getDescription = function () {
    return ('red ' + this.ball.getDescription());
  }

  function SomeBallLine(ball) {
    this.ball = ball;
  }

  SomeBallLine.prototype.getDescription = function () {
    return (this.ball.getDescription() + ' with lines');
  }

console.log(new Ball().getDescription ()); //ball
console.log(new SomeBallLine(new SomeBallColor(new Ball())).getDescription ()); // red ball with lines