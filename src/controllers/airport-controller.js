const {StatusCodes}=require('http-status-codes')
const {AirportService}=require('../services');
const {SuccessResponse,ErrorResponse}=require('../utils/common')

async function createAirport(req,res){
    try {
        // console.log("Inside airplane controller");
        const airport=await AirportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
        });
        SuccessResponse.data=airport;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse);
    } 
    catch (error) {
        ErrorResponse.error=error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getAirports(req,res){
    try {
        const airports=await AirportService.getAirports();
        SuccessResponse.data=airports;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getAirport(req,res){
    try {
        const airports=await AirportService.getAirport(req.params.id);
        SuccessResponse.data=airports;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function destroyAirport(req,res){
    try {
        const response=await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data=response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function updateAirport(req,res){
    try {
        const response=await AirportService.updateAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
        },req.params.id);
        SuccessResponse.data=response;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}