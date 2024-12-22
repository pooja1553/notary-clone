const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
require('./db/conn');
const Appointment = require('./models/Appointment');
const FeedBack = require('./models/FeedBack');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port =process.env.PORT

// app.get('/appointment',async(req,res)=>{
//     try{
//         const appointment = new Appointment({
//             Name:"Shalu",
//             Email:"shalu@gmail.com",
//             Date:"25/05/2025"
//         })
//         const created = appointment.save();
//         console.log(created);
//         res.status(200).send("Appointment data inserted");
//     }
//     catch(e){
//         res.status(404).send(e);
//         console.log(e);
//     }
// })

app.post('/appointment',async(req,res)=>{
    try{
        const Name = req.body.Name;
        const Email = req.body.Email;
        const Date = req.body.Date;
        const appointment = new Appointment({
            Name:Name,
            Email:Email,
            Date:Date
        })
        const created = await appointment.save();
        console.log(created);
        res.status(200).send("Appointment data inserted");
    }
    catch(e){
        res.status(400).send(e);
        console.log(e);
    }
})

app.post('/feedback',async(req,res)=>{
    try{
        const FirstName=req.body.FirstName;
        const LastName=req.body.LastName;
        const Email=req.body.Email;
        const Message=req.body.Message;
        const feedback = new FeedBack({
            FirstName:FirstName,
            LastName:LastName,
            Email:Email,
            Message:Message
        })
        const created = feedback.save();
        console.log(created);
        res.status(200).send("Feedback data inserted");
    }
    catch(e){
        res.status(400).send(e);
        console.log(e);
    }
})

// app.get('/feedback',async(req,res)=>{
//     try{
//         const feedback = new FeedBack({
//             FirstName:"Monika",
//             LastName:"Patidar",
//             Email:"monika@gmail.com",
//             Message:"Hii"
//         })
//         const created = feedback.save();
//         console.log(created);
//         res.status(200).send("Feedback data inserted");
//     }
//     catch(e){
//         res.status(404).send(e);
//         console.log(e);
//     }
// })

app.listen(port,()=>{
    console.log("Server established");
})