const { Router } = require('express');
const express = require('express');
const {loginPatient, loginDoctor, registerPatient, registerDoctor, bookApp, addPatientInfo, generateReport} = require('../controllers/postControllers.js');

const router = express.Router();

router.post('/login/patient', loginPatient);
router.post('/login/doctor', loginDoctor);
router.post('/register/patient', registerPatient);
router.post('/addinfo', addPatientInfo);
router.post('/register/doctor', registerDoctor);
router.post('/bookapp', bookApp);
router.post('/generatereport', generateReport);

module.exports = router