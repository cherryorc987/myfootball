

const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

// /api/auth/hello...
router.post('/register',authController.register );
router.post('/signin',authController.signin );
router.get('/isauth',authController.isauth);  //returns boolean if user authenticated or not.


module.exports = router;