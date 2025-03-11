import { AirlineModel } from "../models/airline.model";

export class AirlineService{
    static  getAirlines(): AirlineModel[]{
        return [
            {
                id : 1,
                name: 'Air Serbia',
                countryOfOrigin: 'Serbia',
                website: 'https://www.airserbia.com/'
            },

            {
                id : 2,
                name: 'Fly Emirate',
                countryOfOrigin: 'UAE',
                website: 'https://www.emirates.com/english'
            },

            {
                id : 3,
                name: 'Lufthansa',
                countryOfOrigin: 'Germany',
                website: 'https://www.lufthansa.com/'
            },

            {
                id : 4,
                name: 'Turkish Airline',
                countryOfOrigin: 'Turkiye',
                website: 'https://www.turkishairlines.com/'
            }
        ]
    }
}