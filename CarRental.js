class CarRental {
    rentCar(customer, rentalDate, destination) {
        console.log(
            `Alugando carro para ${customer} no dia ${rentalDate} em ${destination}.`
        );
        return `Carro alugado para ${customer} em ${destination} no dia ${rentalDate}`;
    }
}

module.exports = CarRental;
