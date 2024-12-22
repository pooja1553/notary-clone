const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    }
})
const appointment = mongoose.model("Appointment",appointmentSchema);
module.exports=appointment;