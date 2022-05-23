const mongoose = require('mongoose');
const validator= require('validator');
require('dotenv').config();

const userSchema=mongoose.Schema({
    email:{},
    password:{},
    role:{},
    
})
