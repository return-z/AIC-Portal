const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Report = require('../models/Report');
const Appointment = require('../models/Appointment');

const loginPatient = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const existingPatient = await Patient.findOne({ email });
        if (!existingPatient) return res.status(400).json({message : "Patient does not exist!"});
        const isCorrectPassword = await bcrypt.compare(password, existingPatient.password);
        if (!isCorrectPassword) return res.status(400).json({message : "Password entered is incorrect!"});
        const token = jwt.sign({email : existingPatient.email, id : existingPatient._id}, 'davidbsdk');
        return res.status(200).json({result : existingPatient, token});
    }
    catch (e) {
        res.status(500).json({message : "Something went wrong!"});
    }
};

const loginDoctor = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingDoctor = await Doctor.findOne({email});
        if (!existingDoctor) return res.status(400).json({message : "Doctor does not exist!"});
        const isCorrectPassword = await bcrypt.compare(password, existingPatient.password);
        if (!isCorrectPassword) return res.status(400).json({message : "Password entered is incorrect!"});
        const token = jwt.sign({email : existingDoctor.email, id : existingDoctor._id}, 'davidbsdk');
        return res.status(200).json({result : existingDoctor, token});
    }
    catch (e) {
        res.status(500).json({message : "Something went wrong!"});
    }
};

const registerPatient = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword, phoneNo } = req.body;
    try {
        const existingPatient = await Patient.findOne({email}) || await Patient.findOne({phoneNo});
        if (existingPatient) {
            return res.status(400).json({message : "Patient already exists!"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await Patient.create({firstName, lastName, password : hashedPassword, email, phoneNo});
        res.status(200).json({result});
    }
    catch (e) {
        console.log(e);
        res.status(500).json({message : "Something went wrong!"});
    };
};

const registerDoctor = async (req, res) => {
    const { firstName, lastName, password, email, phoneNo } = req.body;
    try {
        const existingDoctor = await Doctor.findOne({email}) || Doctor.findOne({phoneNo});
        if (existingDoctor) {
            return res.status(400).json({message : "Doctor already exists!"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await Doctor.create({firstName, lastName, password : hashedPassword, email, phoneNo});
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
        const newAppointment = await Appointment({patient : currPatient, doctor : currDoctor, time : dateTime});
        res.status(200).json({message : "Appointment booked!", result : newAppointment});
    }
    catch (e) {
        console.log(e);
        res.status(500).json({message : "Something went wrong!"});
    }
} 

const addPatientInfo = async (req, res) => {
    const {age, weight, isReferred, isVaccinated, isImmuno, immunoType, currPatientID} = req.body;
    try {
        await Patient.findByIdAndUpdate(currPatientID, {age, weight, isReferred, isVaccinated, isImmuno, immunoType});
        res.status(200).json({message : "Details updated successfully!"});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({message : "Something went wrong!"});
    }
}

const generateReport = async (req, res) => {
    const {currPatientID, diagnosis} = req.body;
    try {
        const result = await Report.create({patient : Patient.findById(currPatientID), diagnosis});
        res.status(200).json({result});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Something went wrong!"});
    }
}

module.exports = {loginDoctor, loginPatient, registerDoctor, registerPatient, bookApp, addPatientInfo, generateReport};