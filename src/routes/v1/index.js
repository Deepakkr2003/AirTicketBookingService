const express = require('express');
const router = express.Router();

const { BookingController } = require('../../controllers/index');

// Create an instance of the BookingController class
const bookingController = new BookingController();

// Pass the 'create' method of the instance as the route handler
router.post('/bookings', bookingController.create);
router.post('/publish',bookingController.sendMessageToQueue)

module.exports = router;