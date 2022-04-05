const bcrypt = require('bcryptjs');

const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');

const getPatientAppointments = async (req, res) => {
    const { currPatientID } = req.body;
    try {
        const results = Appointment.find({patient: Patient.findById(currPatientID)});
        res.status(200).json({result : results});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong!"});
    }
};

const getDoctorAppointments = async (req, res) => {
    const { currDoctorID } = req.body;
    try {
        const results = Appointment.find({doctor: Patient.findById(currDoctorID)});
        res.status(200).json({result : results});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong!"});
    }
};


const getAllDoctors = async (req , res) => {
    try {
        const items = await Doctor.find();
        res.status(200).json(items);
      } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong!"});
      }
};


module.exports = {getPatientAppointments, getDoctorAppointments, getAllDoctors};