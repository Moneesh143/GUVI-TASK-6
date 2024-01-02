class LatestPricingCalculator {
  constructor(minFare, farePerKm, farePerMinute /*distanceKm, timeMinutes*/) {
    this.minFare = minFare;
    this.farePerKm = farePerKm;
    this.farePerMinute = farePerMinute;
    //this.distanceKm = distanceKm;
    //this.timeMinutes = timeMinutes;
  }

  ubercalculator(distanceKm, timeMinutes) {
    const price =
      this.minFare +
      distanceKm * this.farePerKm +
      timeMinutes * this.farePerMinute;
    return price;
  }
}

const calculation = new LatestPricingCalculator(10.0, 3.0, 0.5);

//const distance = 10; // in kilometers
//const time = 20; // in minutes

const totalPrice = calculation.ubercalculator(20, 30);
console.log("Rs", totalPrice);
