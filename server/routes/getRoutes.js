const express = require('express');
const router = express.Router();
const {getAppointments, getUpcomingAppointments, getAllDoctors} = require('../controllers/getControllers.js');

router.get('/appointments', getAppointments);
router.get('/upcoming', getUpcomingAppointments);
router.get('/doctors', getAllDoctors);

module.exports = router;