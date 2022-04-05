const express = require('express');
const router = express.Router();
const {getPatientAppointments, getDoctorAppointments, getAllDoctors} = require('../controllers/getControllers.js');

router.get('/appointments/patient', getPatientAppointments);
router.get('/appointments/doctor', getDoctorAppointments);
router.get('/getdoctors', getAllDoctors);

module.exports = router;