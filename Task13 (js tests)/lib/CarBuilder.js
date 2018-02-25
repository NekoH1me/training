<<<<<<< HEAD
function CarSalon(seats,tripComputer,GPS,tyreSize) {
  this.seats = seats;
  this.tripComputer = tripComputer;
  this.GPS = GPS;
=======
function CarSalon(seats,tripComputer,Gps,tyreSize) {
  this.seats = seats;
  this.tripComputer = tripComputer;
  this.Gps = Gps;
>>>>>>> e12f87481146b806281c78220b04c3d832d0debf
  this.tyreSize = tyreSize;
}

  CarSalon.prototype.getSeats = function() { 
  return this.seats; 
  } 
  
  CarSalon.prototype.getTripComputer = function() { 
  return this.tripComputer; 
  } 
  
  CarSalon.prototype.getGPS = function() { 
<<<<<<< HEAD
  return this.GPS; 
=======
  return this.Gps; 
>>>>>>> e12f87481146b806281c78220b04c3d832d0debf
  } 
  
  CarSalon.prototype.getTyreSize = function() { 
  return this.tyreSize; 
  } 


function CarBuilder() {
<<<<<<< HEAD
  var CarSet = new CarSalon();
=======
  this.CarSet = new CarSalon();
>>>>>>> e12f87481146b806281c78220b04c3d832d0debf
  this.reset;
}

CarBuilder.prototype.reset = function() {
  this.CarSet.seats = 4;
  this.CarSet.tripComputer = false;
<<<<<<< HEAD
  this.CarSet.GPS = false;
=======
  this.CarSet.Gps = false;
>>>>>>> e12f87481146b806281c78220b04c3d832d0debf
  this.CarSet.tyreSize = 'medium';
  return this;
}

CarBuilder.prototype.setSeats = function(seats) {
  this.CarSet.seats = seats;
  return this;
}

CarBuilder.prototype.setTripComputer = function(tripComputer) {
  this.CarSet.tripComputer = tripComputer;
  return this;
}

<<<<<<< HEAD
CarBuilder.prototype.setGPS = function(GPS) {
  this.CarSet.GPS = GPS;
=======
CarBuilder.prototype.setGps = function(Gps) {
  this.CarSet.Gps = Gps;
>>>>>>> e12f87481146b806281c78220b04c3d832d0debf
  return this;
}

CarBuilder.prototype.setTyreSize = function(tyreSize) {
  this.CarSet.tyreSize = tyreSize;
  return this;
}

CarBuilder.prototype.getResult = function() {
  return new CarSalon(
   this.CarSet.seats,
   this.CarSet.tripComputer,
<<<<<<< HEAD
   this.CarSet.GPS,
=======
   this.CarSet.Gps,
>>>>>>> e12f87481146b806281c78220b04c3d832d0debf
   this.CarSet.tyreSize
  );
};

module.exports = CarBuilder;
