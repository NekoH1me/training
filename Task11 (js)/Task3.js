console.log('Task3');

  function Vehical() {
    this.speed = 200;   

    this.stop = function() {
      this.speed = 0;
    };
    this.move = function() {
      this.speed += 1;
    };
    this.toString = function() {
        return ("Vehical speed is " + this.speed);
    };
    this.valueOf = function() {
        return this.speed;
    };     
  }


  function Bike() {
    this.wheelsCount = 2;
    Vehical.apply(this, arguments);

    var move = this.move;

    this.move = function() {
        console.log('Wrom-Wrom');
        move.call(this);
    };
    this.toString = function() {
        return ("Bike speed is " + this.speed + "\n Bike wheelsCount is " + this.wheelsCount);
    };
    this.valueOf = function() {
        return this.wheelsCount;
    };
  }


  function Car() {
    Vehical.apply(this, arguments);
    this.wheelsCount = 4;
    this.doorsCount = 4;
    this.closeDoorsCount = 2;
    Car.count ++;

    this.counter = function() {
        return Car.count;
    };
    this.openDoor = function() {
        if (this.doorsCount > 0) {
          this.doorsCount -= 1;
          console.log ("Number of opened doors is " + (4 - this.doorsCount));
        } else {
          console.log ("Close the door, please");
        }    
    };
    this.closeDoor = function() {
        if (this.closeDoorsCount < this.doorsCount) {
            this.closeDoorsCount += 1;
            console.log ("Number of closed doors is " + this.closeDoorsCount);
          } else {
            console.log ("Open the door, please");
          }    
    };
    this.toString = function() {
        return ("Car speed is " + this.speed + "\n Car wheelsCount is " + this.wheelsCount + "\n Car doorsCount is " + this.doorsCount);
    };
    this.valueOf = function() {
        return this.doorsCount;
    };
  }

  Car.count = 0;


  function MonsterTruck() {
    Vehical.apply(this, arguments);
    Car.apply(this, arguments);
    this.wheelsSize = 35;

    var openDoor = this.openDoor;

    this.openDoor = function() {
        setTimeout(openDoor.call(this), 1000);   
    };
    this.toString = function() {
        return ("MonsterTruck speed is " + this.speed + "\n MonsterTruck wheelsCount is " + this.wheelsCount + 
                           "\n MonsterTruck doorsCount is " + this.doorsCount + "\n MonsterTruck wheelsSize is " + this.wheelsSize);
    };
    this.valueOf = function() {
        return this.wheelsSize;
    };
  }