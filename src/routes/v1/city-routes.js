const express=require('express');
const router=express.Router();

const {CityController}=require('../../controllers')

// console.log("Inside Airplane Routes");

// /api/v1/airplanes POST
router.post("/",
            CityController.createCity);


module.exports=router;