console.log ('Task2');

class Wallet { 
   constructor(name) {
    this.name=name; 
    this.amount = Math.random() * 1000; 
   }

   send() {
       
    this.minus = Math.random() * 100; 

    console.log(`Balance of wallet ${this.name} = ${this.amount} \n Write off =  
                                                                           ${this.minus} \n Add = ${this.wallObs.minus}`); 

    this.amount = this.amount - this.minus; 

    if(!isNaN(this.wallObs.minus)) {
        this.eventFromWallet.call(this,this.wallObs.minus);
    } 
    console.log(this.amount); 
    
    if(this.amount > 0 && this.wallObs.amount > 0) { 
    setTimeout(this.send.bind(this), Math.random() * 500); 
    } else if (this.amount < 0) { 
    console.log(`Wallet ${this.name} is empty`); 
    } 
    else if (this.wallObs.amount < 0) { 
    console.log(`Wallet ${this.wallObs.name} lost`); 
    } 
    };

   eventFromWallet(plus) { 
    this.amount = this.amount + plus; 
    } 
   addObs(obs) { 
    this.wallObs = obs; 
  }
}
       
    let wallet1 = new Wallet('1'); 
    let wallet2 = new Wallet('2'); 
    wallet1.addObs(wallet2); 
    wallet2.addObs(wallet1); 
    wallet1.send(); 
    wallet2.send();

    module.exports = Wallet;