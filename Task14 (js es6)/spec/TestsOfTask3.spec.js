var Child = require('../lib/Task3.js');

describe("Wallet tests", function() { 

    it("should retun true", function() { 
    expect(new Child()).toBeDefined(); 
    }); 
    
    it("should return child next", function() { 
    var child = new Child(null); 

    expect(child.next).toEqual(null); 
    }); 

    it("should be called 'eat' from Child", function() { 
    var child = new Child(); 

    spyOn(child,'eat'); 
    child.eat(); 
    expect(child.eat).toHaveBeenCalled(); 
    }); 
    });