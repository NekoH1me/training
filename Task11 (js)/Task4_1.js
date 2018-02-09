function Animal(name) {
  this.name = name;
}

Animal.prototype.printName = function(name) {
  console.log(this.name);
}

function Rabbit(name) {
  Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.printName = function(name) {
  Animal.prototype.printName.apply(this, arguments);
}

var r = new Rabbit('Lucky');
r.printName(); // Should run without any errors and write 'Lucky'
console.log(Rabbit.prototype.hasOwnProperty('printName')); // Should be false
