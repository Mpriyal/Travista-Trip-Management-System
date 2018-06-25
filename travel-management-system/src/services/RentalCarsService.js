let _singleton = Symbol();
const RENTAL_CARS_URL = 'https://api.sandbox.amadeus.com/v1.2/cars/search-circle?';
const LAT_LONG_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const API_KEY = '';
const LAT_LONG_API_KEY = '';
const LOCAL_CAR_URL = 'http://localhost:4000/api/car';



class RentalCarsService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new RentalCarsService(_singleton);
        return this[_singleton]
    }

    findAllCarsByLatLong(latitude,longitude,pickUp,dropOff,radius){
        return fetch(RENTAL_CARS_URL +
            'pick_up=' + pickUp +
            '&drop_off=' + dropOff +
            '&latitude=' + latitude +
            '&longitude=' + longitude +
            '&radius=' + radius +
            '&apikey=' + API_KEY)
            .then(function(response){
                return response.json();
            });
    }

    findLatLongOfLocation(address){
        return fetch(LAT_LONG_URL +
            'address=' + address +
            '&key=' + LAT_LONG_API_KEY)
            .then(function(response){
                return response.json();
            });
    }

    findAllCars() {
        return fetch(LOCAL_CAR_URL)
            .then(function(response){
                return response.json();
            });
    }

    createCar( ccategory, ctype, cfuel, cair, ctransmission, caddress, cstartDate, cendDate, crate) {
        const car = {
            category: ccategory,
            type: ctype,
            address: caddress,
            fuel: cfuel,
            air_conditioning: cair,
            rate: crate,
            start_date: cstartDate,
            end_date: cendDate,
            transmission: ctransmission};
        return fetch(LOCAL_CAR_URL, {
            method: 'post',
            body: JSON.stringify(car),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    updateCar(carId, ccategory, ctype, cfuel, cair, ctransmission, caddress, cstartDate, cendDate, crate){
        const car = {
            _id: carId,
            category: ccategory,
            type: ctype,
            address: caddress,
            fuel: cfuel,
            air_conditioning: cair,
            rate: crate,
            start_date: cstartDate,
            end_date: cendDate,
            transmission: ctransmission};
        console.log(car.address + "@@@")
        return fetch(LOCAL_CAR_URL+'/'+carId,
            {
                body: JSON.stringify(car),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            })
    }

    deleteCar(carId) {
        return fetch(LOCAL_CAR_URL + '/' + carId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }
}
export default RentalCarsService;