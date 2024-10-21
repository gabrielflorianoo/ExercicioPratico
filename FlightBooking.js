class FlightBooking {
    bookFlight(customer, date, destination) {
        console.log(
            `Reservando voo para ${customer} no dia ${date} para ${destination}.`
        );
        return `Reserva de voo confirmada para ${destination} em ${date}`;
    }
}

module.exports = FlightBooking;
