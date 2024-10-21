const TravelFacade = require('./TravelFacade');

function main() {
    const TravelFacade = require('./TravelFacade');

    // Criação da interface de reserva de viagem
    const travelFacade = new TravelFacade();

    // Simulação de reserva de viagem
    const customer = 'Carlos';
    const flightDate = '2024-12-20';
    const checkInDate = '2024-12-20';
    const destination = 'Nova York';

    // Fazendo uma reserva de viagem completa
    const tripDetails = travelFacade.bookTrip(
        customer,
        flightDate,
        checkInDate,
        destination
    );

    // Exibindo as confirmações
    tripDetails.forEach((detail) => console.log(detail));
}

main();
