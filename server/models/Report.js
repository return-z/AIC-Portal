const mongoose = require('mongoose');

var ReportSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Patient",
    },
    diagnosis : {
        type: String,
    }
})

const Report = mongoose.model("Report", ReportSchema);
module.exports = Report;
