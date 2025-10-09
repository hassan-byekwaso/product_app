//import mongoose(help us to talk to mongodb)
const mongoose = require('mongoose');

//define how a user looks in the database
const userSchema = new mongoose.Schema({
    name:String,   //user's name
    email:String, //user's email
    password:String //user's password
});

//create a model called User using the schema
const User = mongoose.model('User', userSchema);

//export the model so we can use it in other files
module.exports = User;


