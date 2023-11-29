const CrudRepository = require('./crud-repository');
const { Flight,Airplane } = require('../models');


class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter,sort){
        const response=await Flight.findAll({
            where:filter,
            order:sort,
            include:{
               model: Airplane,
               required:true
            }
        });
        return response;
    }
}

module.exports = FlightRepository;