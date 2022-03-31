const bcrypt = require('bcryptjs');

const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

const loginPatient = async (req, res) => {
    const { email, pwd } = req.body;
    console.log('endpoint hit');
    try {
        const existingPatient = await Patient.findOne({email});
        if (!existingPatient) return res.status(400).json({message : "Patient does not exist!"});
        const isCorrectPwd = await bcrypt.compare(pwd, existingPatient.password);
        if (!isCorrectPwd) return res.status(400).json({message : "Password entered is incorrect!"});
        const token = jwt.sign({email : existingPatient.email, id : existingPatient._id}, 'davidbsdk');
        return res.status(200).json({result : existingPatient, token});
    }
    catch (e) {
        res.status(500).json({message : "Something went wrong!"});
    }
};

const loginDoctor = async (req, res) => {
    const { email, pwd } = req.body;
    try {
        const existingDoctor = await Doctor.findOne({email});
        if (!existingDoctor) return res.status(400).json({message : "Doctor does not exist!"});
        const isCorrectPwd = await bcrypt.compare(pwd, existingPatient.password);
        if (!isCorrectPwd) return res.status(400).json({message : "Password entered is incorrect!"});
        const token = jwt.sign({email : existingDoctor.email, id : existingDoctor._id}, 'davidbsdk');
        return res.status(200).json({result : existingDoctor, token});
    }
    catch (e) {
        res.status(500).json({message : "Something went wrong!"});
    }
};

const registerPatient = async (req, res) => {
    const { firstName, lastName, pwd, email, phoneNo } = req.body;
    try {
        const existingPatient = await Patient.findOne({email}) || await Patient.findOne({phoneNo});
        if (existingPatient) {
            return res.status(400).json({message : "Patient already exists!"});
        }
        const hashedPwd = await bcrypt.hash(pwd, 12);
        const result = await Patient.create({firstName, lastName, password : hashedPwd, email, phoneNo});
        res.status(200).json({result});
    }
    catch (e) {
        console.log(e);
        res.status(500).json({message : "Something went wrong!"});
    };
};

const registerDoctor = async (req, res) => {
    const { firstName, lastName, pwd, email, phoneNo } = req.body;
    try {
        const existingDoctor = await Doctor.findOne({email}) || Doctor.findOne({phoneNo});
        if (existingDoctor) {
            return res.status(400).json({message : "Doctor already exists!"});
        }
        const hashedPwd = await bcrypt.hash(pwd, 12);
        const result = await Doctor.create({firstName, lastName, password : hashedPwd, email, phoneNo});
        res.status(200).json({result});
    } 
    catch (e) {
        console.log(e);
        res.status(500).json({message : "Something went wrong!"});
    }
};

const bookApp = async (req, res) => {
    const {currPatientID, dateTime, doctorID} = req.body;
    try {
        const currDoctor = await Doctor.findOne({__id : doctorID});
        const currPatient = await Patient.findOne({__id : currPatientID});
        const patientApps = currPatient.appointments;
        const docApps = currDoctor.appointments;
        patientApps.push({
            "doctor" : currDoctor, 
            "datetime" : dateTime,
        })
        docApps.push({
            "patient" : currPatient, 
            "datetime" : dateTime,
        })
        currDoctor.appointments = docApps;
        currPatient.appointments = patientApps;
        currDoctor.save();
        currPatient.save();
        res.status(200).json({message : "Appointment booked!"});
    }
    catch (e) {
        console.log(e);
        res.status(500).json({message : "Something went wrong!"});
    }
} 

module.exports = {loginDoctor, loginPatient, registerDoctor, registerPatient, bookApp};