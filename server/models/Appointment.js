const mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Patient",
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    },
    time: {
        type: Date,
    }
})

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;