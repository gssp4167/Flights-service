const express=require('express');
const router=express.Router();

const {CityController}=require('../../controllers');
const {CityMiddlewares}=require('../../middlewares');
// console.log("Inside Airplane Routes");

// /api/v1/airplanes POST
router.post("/",
            CityMiddlewares.validateCreateRequest,
            CityController.createCity);


module.exports=router;