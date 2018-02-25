function CarSalon(seats,tripComputer,GPS,tyreSize) {
  this.seats = seats;
  this.tripComputer = tripComputer;
  this.GPS = GPS;
  this.tyreSize = tyreSize;
}

  CarSalon.prototype.getSeats = function() { 
  return this.seats; 
  } 
  
  CarSalon.prototype.getTripComputer = function() { 
  return this.tripComputer; 
  } 
  
  CarSalon.prototype.getGPS = function() { 
  return this.GPS; 
  } 
  
  CarSalon.prototype.getTyreSize = function() { 
  return this.tyreSize; 
  } 


function CarBuilder() {
  this.CarSet = new CarSalon();
  this.reset;
}

CarBuilder.prototype.reset = function() {
  this.CarSet.seats = 4;
  this.CarSet.tripComputer = false;
  this.CarSet.GPS = false;
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

CarBuilder.prototype.setGPS = function(GPS) {
  this.CarSet.GPS = GPS;
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
   this.CarSet.GPS,
   this.CarSet.tyreSize
  );
};

module.exports = CarBuilder;
