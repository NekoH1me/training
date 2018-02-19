var Ball = require('../lib/Task1/Ball.js');
var SomeBallColor = require('../lib/Task1/SomeBallColor.js');
var SomeBallLine = require('../lib/Task1/SomeBallLine.js');

  describe("Ball tests", function(){ 
    it("should return true", function(){ 
      expect(new Ball()).toBeDefined(); 
    }); 
    
    it("should return ball description", function(){ 
      expect(new Ball().getDescription()).toEqual('ball'); 
    }); 
    
    it("should return 'red ball'", function(){ 
      expect(new SomeBallColor(new Ball()).getDescription()).toEqual('red ball'); 
    }); 
    
    it("should be called 'getDescription' from SomeBallColor", function(){ 
      var ball = new Ball(); 
      
      spyOn(ball,'getDescription'); 
      new SomeBallColor(ball).getDescription(); 
      expect(ball.getDescription).toHaveBeenCalled(); 
    }); 
    
    it("should be called 'getDescription' from Ball", function() { 
      var ball = new Ball(); 

      spyOn(ball, 'getDescription'); 
      new SomeBallColor(ball).getDescription(); 
      expect(ball.getDescription).toHaveBeenCalled(); 
    }); 
});