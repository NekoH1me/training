  class SomeBallColor {
    constructor (ball){
      this.ball = ball;
    }
    getDescription() {
      return (`red ${this.ball.getDescription()}`);
    }
  }
 
  module.exports = SomeBallColor;