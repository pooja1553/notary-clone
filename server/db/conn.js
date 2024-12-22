const mongoose = require("mongoose");
const db = process.env.DATABASE;
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DataBase Connected");
}).catch((e)=>{
    console.log("Error",e);
})