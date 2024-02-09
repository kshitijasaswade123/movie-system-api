const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    poster:{
        type:String
        },
     categry:{
        type:mongoose.Schema.ObjectId,
        ref:'categry'
     }   
})

module.exports = mongoose.model('movie',movieSchema);