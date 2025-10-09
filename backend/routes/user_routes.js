//import express
const express = require('express');

//import the User model
const User = require('../models/user_model'); 

//create a router(mini express app )
const router = express.Router();

//signing route
//when a new user wants to register
router.post('/signup', async (req, res) => {
    try {
        //req.body contains the data sent by the user  
        const { name, email, password } = req.body;

        //check if a user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }   
 //create a new user object
        const newUser = new User({ name, email, password });

        //save the user to the mongodb database
        await newUser.save();

        //send back a success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong ' });
    }
});

//login route
//when an existing user wants to login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        //find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        //check if the password matches
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        //if all good
        res.status(200).json({ message: 'Welcome, ${user.name}!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

//export the router so we can use it in other files
module.exports = router;        
