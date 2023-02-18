import { Tesla, Audi, Toyota, Honda } from './01-liskov-substitution-b-good';


(() => {

    const printCarSeats = ( cars: (Tesla | Audi | Toyota | Honda)[] ) => {

        cars.forEach(car => {
            console.log(car.constructor.name, car.getNumberOfSeats())
        })
    }

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];

    printCarSeats( cars );

})();