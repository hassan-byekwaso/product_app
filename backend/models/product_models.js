//import mongoose
const mongoose = require ('mongoose');
//define how  our product looks like
const productSchema = new mongoose.Schema({
    name:  String,
    price: Number,

});
//create a model using the schema
const Product = mongoose.model('Product', productSchema);
//export the model to use it in other files
module.exports = Product;