const mongoose = require('mongoose');
const feedBack = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        required:true
    }
})
const FeedBack = mongoose.model("Feedback",feedBack);
module.exports=FeedBack;