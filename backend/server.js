const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require('body-parser')
const doctorRoute = require("./routes/doctorRoute");
const app = express();
app.use(cors());

mongoose.connect(process.env.DBCONN).then(()=>{
  console.log("Database Succesfully Connected!");
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/doctor", doctorRoute);



app.listen(8000, () => console.log("Server running on port 8000"));