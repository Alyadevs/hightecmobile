const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    description:{
        type:String,
        required:true,
        unique:true,
    },
    imagePath:{
        type:String,
        required:true,
        unique:true,
    },
 
});

//Export the model
module.exports = mongoose.model('product', productSchema);