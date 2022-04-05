const bcrypt = require('bcryptjs');

const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

const getAppointments = async (req, res) => {
    const { currPatientID } = req.body;
    try {
        const currPatient = await Patient.findOne({__id : currPatientID});
        const appointments = currPatient.appointments;
        appointments.sort((a, b) => {
            return new Date(b.datetime) - new Date(a.datetime);
        });
        const currDate= new Date();
        let idx=0;
        const prevAppointments = [];
        while(idx<appointments.length && appointments[idx].datetime < currDate)
        {
            prevAppointments.push(appointments[idx]);
            idx=idx+1;
        }
        res.status(200).json({prevAppointments});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong!"});
    }
};

const getUpcomingPatientAppointments = async (req, res) => {
    const { currPatientID } = req.body;
    try {
        const currPatient = await Patient.findOne({__id : currPatientID});
        const appointments = currPatient.appointments;
        appointments.sort((a, b) => {
            return new Date(b.datetime) - new Date(a.datetime);
        });
        const currDate = new Date();
        let idx = 0;
        const prevAppointments = [];
        while(idx < appointments.length && appointments[idx].datetime < currDate)
        {
            prevAppointments.push(appointments[idx]);
            idx = idx + 1;
        }
        if(idx >= appointments.length) res.status(200).json({appointment : null});
        else res.status(200).json({appointment : appointments[idx]});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Something went wrong!"});
    }
};


const getAllDoctors = async (req , res) => {
    try {
        const items = await Doctor.find();
        res.status(200).json(items);
      } catch (error) {
        console.log(error);
        res.status(404).json({ message:error.message });
      }
};

const getUpcomingDoctorAppointments = async (req, res) => {
    const { currDoctorID } = req.body;
    try {
        const currDoctor = await Doctor.findOne({__id : currDoctorID});
        const appointments = currDoctor.appointments;
        appointments.sort((a, b) => {
            return new Date(b.datetime) - new Date(a.datetime);
        });
        const currDate = new Date();
        let idx = 0;
        const prevAppointments = [];
        while(idx < appointments.length && appointments[idx].datetime < currDate)
        {
            prevAppointments.push(appointments[idx]);
            idx = idx + 1;
        }
        if(idx >= appointments.length) res.status(200).json({appointment : null});
        else res.status(200).json({appointment : appointments[idx]});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Something went wrong!"});
    }
};

module.exports = {getAppointments, getUpcomingPatientAppointments, getAllDoctors, getUpcomingDoctorAppointments};