
let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passingerId = 0;
let tripId = 0

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id
      }.bind(this)
    );
  }

  passengers() {

  //let tripsArray =  store.trips.filter(
  //  function(trip) {
  //    return trip.driverId === this.id
  //  }.bind(this)
  //);

  let passengersArray = this.trips().map(function(trp){
      return store.passengers.find(function (pgr){return trp.passengerId === pgr.id})
  })

  return passengersArray

  }
}

class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++passingerId;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id
      }.bind(this)
    );
  }

  drivers() {

    let driversArray = this.trips().map(function(trp){
        return store.drivers.find(function (drv){return trp.driverId === drv.id})
    })

    return driversArray

  }


}

class Trip {
  constructor(driver, passenger){
    this.name = name;
    this.id = ++tripId;
    store.trips.push(this)

    if (driver) {
      this.driverId = driver.id
      }

    if (passenger) {
      this.passengerId = passenger.id
      }

    }

    passenger() {
      return store.passengers.find(function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this));
    }

    driver() {
      return store.drivers.find(function(driver) {
                return driver.id === this.driverId;
            }.bind(this));
    }


  }
