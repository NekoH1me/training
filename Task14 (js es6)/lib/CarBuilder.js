class CarSalon {
  constructor(seats,tripComputer,Gps,tyreSize){
    this.seats = seats;
    this.tripComputer = tripComputer;
    this.Gps = Gps;
    this.tyreSize = tyreSize;
  }

  getSeats() { 
    return this.seats; 
    } 
    
  getTripComputer() { 
    return this.tripComputer; 
    } 
    
  getGps() { 
    return this.Gps; 
    } 
    
  getTyreSize() { 
    return this.tyreSize; 
    }
}

class CarBuilder {
  constructor(){
    this.CarSet = new CarSalon();
    this.reset;
  }
  
  reset() {
    this.CarSet.seats = 4;
    this.CarSet.tripComputer = false;
    this.CarSet.Gps = false;
    this.CarSet.tyreSize = 'medium';
    return this;
  }
  
  setSeats(seats) {
    this.CarSet.seats = seats;
    return this;
  }
  
  setTripComputer(tripComputer) {
    this.CarSet.tripComputer = tripComputer;
    return this;
  }
  
  setGPS(Gps) {
    this.CarSet.Gps = Gps;
    return this;
  }
  
  setTyreSize(tyreSize) {
    this.CarSet.tyreSize = tyreSize;
    return this;
  }
  
  getResult() {
    return new CarSalon(
     this.CarSet.seats,
     this.CarSet.tripComputer,
     this.CarSet.Gps,
     this.CarSet.tyreSize
    );
  };
}

module.exports = CarBuilder;
