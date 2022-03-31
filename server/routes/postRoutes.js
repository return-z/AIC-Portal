const express = require('express');
const {loginPatient, loginDoctor, registerPatient, registerDoctor, bookApp} = require('../controllers/postControllers.js');
const router = express.Router();

router.post('/login/patient', loginPatient);
router.post('/login/doctor', loginDoctor);
router.post('/register/patient', registerPatient);
router.post('/register/doctor', registerDoctor);
router.post('/bookapp', bookApp);
module.exports = router