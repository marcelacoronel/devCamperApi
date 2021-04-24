const express = require('express');
const dotenv = require('dotenv');

const bootcampRouters = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path:':/config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(`server Marce Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//Mount routes
app.use('/api/v1/bootcamps', bootcampRouters);



/* prueba
app.get('/',(req,res)=>{
    // res.send('<h1>hola marce desde express</h1>'); //content html
    // res.send({name: 'Marcela'});  //Content type json
    // res.json({name: 'Marcela'}); //type json
    // res.status(400).json({ok: false}); //type json
})*/