const {CityRepository} = require('../repositories');
const AppError=require('../utils/errors/app-error')
const {StatusCodes}=require('http-status-codes');
const cityRepository=new CityRepository();

async function createCity(data){
    try {
        // console.log("Inside airplane service");
        const city=await cityRepository.create(data);
        return city;
    } catch (error) {
        if(error.name=='SequelizeValidationError' || error.name=='SequelizeUniqueConstraintError'){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCities(){
    try{
        const cities=await cityRepository.getAll();
        return cities;
    }
    catch(error){
        throw new AppError('Cannot fetch data of all cities',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(id){
    try{
        const city=await cityRepository.get(id);
        return city;
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested is not present',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of all the cities',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id){
    try{
        const response=await cityRepository.destroy(id);
        return response;
    }
    catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to delete is not present',StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch data of all the cities',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(data,id){
    try {
        const city=cityRepository.get(id);
        if(city){
            const response=await CityRepository.update(data,id);
            return response;
        }
    } catch (error) {
        throw new AppError('The city you requested to update is not present',StatusCodes.BAD_REQUEST);
    }
}


module.exports={
    createCity,
    getCities,
    getCity,
    destroyCity,
    updateCity
}

