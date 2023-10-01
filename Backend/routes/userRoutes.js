const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST route for user signup
router.post('/signup', userController.signup);

// Add login route and other user-related routes here

module.exports = router;
