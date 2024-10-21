class HotelBooking {
    bookHotel(customer, checkInDate, destination) {
        console.log(
            `Reservando hotel para ${customer} a partir de ${checkInDate} em ${destination}.`
        );
        return `Reserva de hotel confirmada em ${destination} a partir de ${checkInDate}`;
    }
}

module.exports = HotelBooking;
