var Wallet = require('../lib/Task2.js');

describe("Wallet tests", function(){ 
  it("should return true", function(){ 
   expect(new Wallet()).toBeDefined(); 
  }); 

it("should return wallet observer", function(){ 
  var wallet = new Wallet(); 

  wallet.addObs(null); 
  expect(wallet.wallObs).toEqual(null); 
  }); 

it("should be called 'addObs' from Wallet", function(){ 
  var wallet = new Wallet(); 

  spyOn(wallet,'addObs'); 
  wallet.addObs(); 
  expect(wallet.addObs).toHaveBeenCalled(); 
  }); 
});