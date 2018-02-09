console.log('Task1');

var Vehical = {
  speed: 200
};

var Bike = {
  wheelsCount: 2 
};

var Car = {
  wheelsCount: 4,
  doorsCount: 4
};

var MonsterTruck = {
  wheelsSize: 35
};

Bike.__proto__ = Vehical;
Car.__proto__ = Vehical;
MonsterTruck.__proto__ = Vehical;
MonsterTruck.__proto__ = Car;

console.log('Bike.speed: \n' + Bike.speed + '\n' + 'Car.speed \n' + Car.speed + '\n' + 'MonsterTruck.speed: \n' + 
MonsterTruck.speed + '\n' + 'MonsterTruck.wheelsCount: \n' + MonsterTruck.wheelsCount + '\n' + 'MonsterTruck.doorsCount: \n' +
                                                                                                         MonsterTruck.doorsCount);