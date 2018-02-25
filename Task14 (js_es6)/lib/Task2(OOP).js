console.log('Task2 OOP');

  class Vehical {
    constructor(){
      this.speed = 200;
    }
    stop() {
      this.speed = 0;
    }
    move() {
      this.speed += 1;
    }
    toString() {
      return (`Vehical speed is ${this.speed}`);
    }
    valueOf() {
      return this.speed;
    }
  }
  
  

  class Bike extends Vehical{
    constructor(){
      super(speed);
      this.wheelsCount = 2;
    }
      move() {
        console.log('Wrom-Wrom');
        super.move();
      }
      toString() {
        return (`Bike speed is ${this.speed} \n Bike wheelsCount is ${this.wheelsCount}`);
      }
      valueOf() {
        return this.wheelsCount;
      }
    }
  


  class Car extends Vehical {
    constructor(){
      super(speed);
      this.wheelsCount = 4;
      this.doorsCount = 4;
      this.closeDoorsCount = 2;
      Car.count ++;
    }
    counter() {
      return Car.count;
    }
    openDoor() {
      if (this.closeDoorsCount > 0) {
        this.closeDoorsCount -= 1;
        console.log (`Number of opened doors is ${4 - this.closeDoorsCount}`);
      } else {
        console.log ("Close the door, please");
      }    
    }
    closeDoor() {
      if (this.closeDoorsCount < this.doorsCount) {
        this.closeDoorsCount += 1;
        console.log (`Number of closed doors is ${this.closeDoorsCount}`);
      } else {
        console.log ("Open the door, please");
      }    
    }  
    toString() {
      return (`Car speed is ${this.speed} \n Car wheelsCount is ${this.wheelsCount} \n Car doorsCount is ${this.doorsCount}`);
    }
    valueOf() {
      return this.doorsCount;
    }
  }

  Car.count = 0;

  class MonsterTruck extends Car {
    constructor(){
      super(speed, wheelsCount, doorsCount, closeDoorsCount);
      this.wheelsSize = 35;
    }
    openDoor() {
      setTimeout(super.openDoor(), 1000);   
    }
    toString() {
      return (`MonsterTruck speed is ${this.speed} \n MonsterTruck wheelsCount is ${this.wheelsCount} 
                             \n MonsterTruck doorsCount is ${this.doorsCount}\n MonsterTruck wheelsSize is ${this.wheelsSize}`);
    }
    valueOf() {
      return this.wheelsSize;
    }
  }