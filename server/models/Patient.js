const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    firstName : {
        type: String, 
        required: true,
    },
    lastName : {
        type: String, 
        required: true,
    },
    password : {
        type: String, 
        required: true,
    },
    email : {
        type: String, 
        required: true, 
    },
    phoneNo : {
        type: Number,
        validate: {
            validator: function(v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    age: {
        type: Number,
    },
    weight: {
        type: Number, 
    },
    isReferred: {
        type: Boolean,
    },
    isVaccinated: {
        type: Boolean,
    },
    isImmuno: {
        type: Boolean,
    },
    immunoType: {
        type: String,
        enum: ['eRIG','mRIG',' HRIG']
    },
    appointments: {
        type: Array,
    }
})

const Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;