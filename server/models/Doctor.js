const mongoose = require('mongoose');
import { isEmail } from 'validator';

var DoctorSchema = new mongoose.Schema({
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
        validate: [isEmail, 'E-mail is invalid']
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
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }]
})