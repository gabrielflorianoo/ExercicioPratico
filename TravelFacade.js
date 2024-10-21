const FlightBooking = require('./FlightBooking');
const HotelBooking = require('./HotelBooking');
const CarRental = require('./CarRental');

class TravelFacade {
    constructor() {
        this.flightBooking = new FlightBooking();
        this.hotelBooking = new HotelBooking();
        this.carRental = new CarRental();
    }

    bookTrip(customer, date, checkInDate, destination) {
        const flight = this.flightBooking.bookFlight(
            customer,
            date,
            destination
        );
        const hotel = this.hotelBooking.bookHotel(
            customer,
            checkInDate,
            destination
        );
        const car = this.carRental.rentCar(customer, checkInDate, destination);

        return [flight, hotel, car];
    }
}

module.exports = TravelFacade;
