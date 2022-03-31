import bcrypt from 'bcryptjs';

import Patient from '../models/Patient';
import Doctor from '../models/Doctor';

export const loginPatient = async (req, res) => {
    console.log(req);
    const {email, phoneNo, pwd} = req.body;
    try {
        const existingPatient = await Patient.findOne({email}) || await Patient.findOne({phoneNo});
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

export const loginDoctor = async (req, res) => {
    const {email, phoneNo, pwd} = req.body;
    try {
        const existingDoctor = await Doctor.findOne({email}) || await Doctor.findOne({phoneNo});
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

export const registerPatient = async (req, res) => {
    const { firstName, lastName, pwd, email, phoneNo, age, weight, isReferred, isVaccinated, isImmuno, immunoType } = req.body;
    try {
        const existingPatient = await Patient.findOne({email}) || await Patient.findOne({phoneNo});
        if (existingPatient) {
            return res.status(400).json({message : "Patient already exists!"});
        }
        const hashedPwd = await bcrypt.hash(pwd, 12);
        const result = await Patient.create({firstName, lastName, password : hashedPwd, email, phoneNo, age, weight, isReferred, isVaccinated, isImmuno, immunoType});
        res.status(200).json({result});
    }
    catch (e) {
        console.log(e);
        res.status(500).json({message : "Something went wrong!"});
    };
};

export const registerDoctor = async (req, res) => {
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