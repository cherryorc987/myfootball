const express=require('express');
const app=express();       //instance of express
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

/// body parse
app.use(express.json());
/// sanitize
app.use(xss());
app.use(mongoSanitize());

/// routes
app.use('/api',routes);

//making base server
const port=process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server ${port}`)
});