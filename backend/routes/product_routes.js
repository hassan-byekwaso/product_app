//import express
const express = require('express');

//create a router
const router = express.Router();

//import the product model
const Product = require('../models/product_models');

//get create a new product
router.post('/', async (req, res) => {
    try {  
        
        const product = new Product(req.body);

//save the product to the mongo db
const savedProduct = await product.save();

//send the saved product as a response
//status code 201 means created
res.status(201).json(savedProduct);
    } catch (error) {

        //if something goes wrong send a 500 status code
        res.status(400).json({message: error.message});
    }
});
// router.get('/', async (req, res) => {
//     try {
//         //fetch all products from the database
    

// GET route to retrieve all products
router.get('/', async (req, res) => {
    try {
        // Retrieve all products from the database
        const products = await Product.find();

        // If no products are found, respond with an empty array
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }

        // Respond with the list of products
        res.status(200).json(products);
    } catch (error) {
        // Respond with a 500 error if something goes wrong with the database query
        res.status(500).json({ message: error.message });
    }
});

//export the router
module.exports = router;
