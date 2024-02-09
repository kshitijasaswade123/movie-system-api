const mongoose = require('mongoose');
const catgrySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('categry',catgrySchema);

