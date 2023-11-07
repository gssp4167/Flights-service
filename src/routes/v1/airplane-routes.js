const express=require('express');
const {AirplaneMiddlewares}=require('../../middlewares')
const router=express.Router();

const {AirplaneController}=require('../../controllers')

// console.log("Inside Airplane Routes");

// /api/v1/airplanes POST
router.post("/",
            AirplaneMiddlewares.validateCreateRequest,
            AirplaneController.createAirplane);

// /api/v1/airplanes GET
router.get("/",AirplaneController.getAirplanes);

// /api/v1/airplanes/:id
router.get("/:id",AirplaneController.getAirplane);
module.exports=router;