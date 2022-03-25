const express = require('express');
import {loginPatient, loginDoctor, registerPatient, registerDoctor} from './controllers/postControllers.js';
const router = express.Router();

router.post('/login/patient', loginPatient);
router.post('/login/doctor', loginDoctor);
router.post('/register/patient', registerPatient);
router.post('/register/doctor', registerDoctor);
module.exports = router