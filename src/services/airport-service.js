const {AirportRepository} = require('../repositories');
const AppError=require('../utils/errors/app-error')
const {StatusCodes}=require('http-status-codes');
const airportRepository=new AirportRepository();

async function createAirport(data){
    try {
        // console.log("Inside airplane service");
        const airport=await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name='SequelizeValidationError'){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airport object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports(){
    try {
        const airports=await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id){
    try {
        const airport=await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The Airport you requested is not present',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id){
    try {
        const response=await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The Airport you requested to delete is not present',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of all the airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(data,id){
    try {
        const airport=await airportRepository.get(id);
        if(airport)
        {
            const response=await airportRepository.update(data,id);
            return response;
        }
        
    } catch (error) {
        throw new AppError('The Airport you requested to update is not present',StatusCodes.BAD_REQUEST);
}
}

module.exports={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}