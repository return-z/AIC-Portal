const express = require('express');
const router = express.Router();
const {getAppointments, getUpcomingPatientAppointments, getUpcomingDoctorAppointments, getAllDoctors} = require('../controllers/getControllers.js');

router.get('/appointments', getAppointments);
router.get('/upcoming/patient', getUpcomingPatientAppointments);
router.get('/upcoming/doctor', getUpcomingDoctorAppointments);
router.get('/getdoctors', getAllDoctors);

module.exports = router;