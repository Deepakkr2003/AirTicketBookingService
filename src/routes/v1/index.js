const express = require('express');
const router = express.Router();

const { BookingController } = require('../../controllers/index');

// Create an instance of the BookingController class
const bookingController = new BookingController();

router.get('/info',(req,res)=>{
    return res.json({message:'Response from routes'})
})
router.post('/bookings', bookingController.create);
router.post('/publish',bookingController.sendMessageToQueue)

module.exports = router;