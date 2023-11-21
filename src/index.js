const express=require('express');

const {ServerConfig,Logger}=require('./config');
const apiRoutes=require('./routes');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,async ()=>{
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
    // Logger.info("Successfully started the server",{msg:"success"});


    //bad code alert

    const {Airport, City}=require('./models');
    console.log(typeof Airport,City);

    const city=await City.findByPk(1);
    console.log(city);

    // const airport=await Airport.create({
    //     name:'Kempemgowda airport',
    //     code:'BLR'
    // });
    // console.log(airport);

    // const response=await city.createAirport({
    //         name:'Kempemgowda airport',
    //         code:'BLR'
    //     });

    // const response=await city.getAirports();
    // console.log(response);
});


