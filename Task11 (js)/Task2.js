console.log('Task2');

  function Vehical() {
    this.speed = 200;
  }
  
  Vehical.prototype.stop = function() {
    this.speed = 0;
  };
  Vehical.prototype.move = function() {
    this.speed += 1;
  };
  Vehical.prototype.toString = function() {
    return ("Vehical speed is " + this.speed);
  }
  Vehical.prototype.valueOf = function() {
    return this.speed;
  }



  function Bike() {
    this.wheelsCount = 2;
    Vehical.apply(this, arguments);
  }

  Bike.prototype = Object.create(Vehical.prototype);
  Bike.prototype.constructor = Bike;

  Bike.prototype.move = function() {
    console.log('Wrom-Wrom');
    Vehical.prototype.move.apply(this, arguments);
  }
  Bike.prototype.toString = function() {
    return ("Bike speed is " + this.speed + "\n Bike wheelsCount is " + this.wheelsCount);
  }
  Bike.prototype.valueOf = function() {
    return this.wheelsCount;
  }



  function Car() {
    Vehical.apply(this, arguments);
    this.wheelsCount = 4;
    this.doorsCount = 4;
    this.closeDoorsCount = 2;
    Car.count ++;
  }

  Car.count = 0;

  Car.prototype = Object.create(Vehical.prototype);
  Car.prototype.constructor = Car;

  Car.prototype.counter = function() {
    return Car.count;
  }

  Car.prototype.openDoor = function() {
    if (this.closeDoorsCount > 0) {
      this.closeDoorsCount -= 1;
      console.log ("Number of opened doors is " + (4 - this.closeDoorsCount));
    } else {
      console.log ("Close the door, please");
    }    
  };
  Car.prototype.closeDoor = function() {
    if (this.closeDoorsCount < this.doorsCount) {
      this.closeDoorsCount += 1;
      console.log ("Number of closed doors is " + this.closeDoorsCount);
    } else {
      console.log ("Open the door, please");
    }    
  };

  Car.prototype.toString = function() {
    return ("Car speed is " + this.speed + "\n Car wheelsCount is " + this.wheelsCount + "\n Car doorsCount is " + this.doorsCount);
  }
  Car.prototype.valueOf = function() {
    return this.doorsCount;
  }



  function MonsterTruck() {
    Vehical.apply(this, arguments);
    Car.apply(this, arguments);
    this.wheelsSize = 35;
  }

  MonsterTruck.prototype = Object.create(Car.prototype);
  MonsterTruck.prototype.constructor = MonsterTruck;

  MonsterTruck.prototype.openDoor = function() {
    setTimeout(Car.prototype.openDoor.apply(this, arguments), 1000);   
  };

  MonsterTruck.prototype.toString = function() {
    return ("MonsterTruck speed is " + this.speed + "\n MonsterTruck wheelsCount is " + this.wheelsCount + 
                           "\n MonsterTruck doorsCount is " + this.doorsCount + "\n MonsterTruck wheelsSize is " + this.wheelsSize);
  }
  MonsterTruck.prototype.valueOf = function() {
    return this.wheelsSize;
  }