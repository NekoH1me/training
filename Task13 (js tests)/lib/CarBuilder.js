function CarBuilder() {

}

CarBuilder.prototype.reset = function() {
  this.seats = 4;
  this.tripComputer = false;
  this.GPS = false;
  this.tyreSize = 'medium';
  return this;
}

CarBuilder.prototype.setSeats = function(seats) {
  this.seats = seats;
  return this;
}

CarBuilder.prototype.setTripComputer = function(tripComputer) {
  this.tripComputer = tripComputer;
  return this;
}

CarBuilder.prototype.setGPS = function(GPS) {
  this.GPS = GPS;
  return this;
}

CarBuilder.prototype.setTyreSize = function(tyreSize) {
  this.tyreSize = tyreSize;
  return this;
}

CarBuilder.prototype.getResult = function() {
  var seats = this.seats, 
      tripComputer = this.tripComputer, 
      GPS = this.GPS, 
      tyreSize = this.tyreSize;
  return {
    getSeats: function() {
      return seats;
    },
    getTripComputer: function() {
      return tripComputer;
    },
    getGps: function() {
      return GPS;
    },
    getTyreSize: function() {
      return tyreSize;
    }
  };
};

module.exports = CarBuilder;