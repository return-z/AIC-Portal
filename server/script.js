const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

const connectDB = require('./db.js');
const Doctor = require('./models/Doctor');

dotenv.config();
connectDB();

// let password = '.', firstName = 'A', lastName = 'A', email = 'A', phoneNo = '1111111111';

const createDocs = async () => {
    await Doctor.find({}).then(doctors => {
        console.log(doctors);
    })
}

createDocs();
