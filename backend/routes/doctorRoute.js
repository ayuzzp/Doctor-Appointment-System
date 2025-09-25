const express = require("express");
const route = express.Router();
const doctorController= require("../controllers/doctorController")
const uploadMiddleware = require("../middlewares/cloudinaryUpload")


route.post("/doctorsave", uploadMiddleware.upload.single("file"),  doctorController.doctorSave);
route.post("/doctorlogin", doctorController.doctorLogin);
route.get("/doctorinfo", doctorController.doctorInfo);
route.get("/searchdoctor",doctorController.searchDoctor);
route.post("/searchbycity",doctorController.searchDoctorByCity);
route.get("/getdocinfo",doctorController.getdoctorInfo);
route.post("/patientsave",doctorController.patientSave);
route.get("/showpatientlist",doctorController.getPatientDetail);




module.exports= route;