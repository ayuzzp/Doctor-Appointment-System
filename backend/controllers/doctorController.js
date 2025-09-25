const DoctorModel = require("../models/doctorModel");
const patientModel = require("../models/patientModel");

const doctorSave=async(req, res)=>{
 try {
     const   {name, speciality, city, address, contact, email, password}= req.body;
    
     const Doctor = await DoctorModel.create({
         doctorname: name,
        speciality: speciality,
         city: city,
         address: address,
         image:  req.file.path,
         contact:contact,
         email: email,
         password: password
     })    
 res.json({
 success: true,
 fileUrl: req.file.path, // Cloudinary file URL
 });
 } catch (err) {
 res.status(500).json({ success: false, message: err.message });
 }
}

const doctorLogin=async(req,res)=>{
  const { email,password } = req.body;
try {
    const Doctor= await DoctorModel.findOne({email:email})
    console.log(Doctor)
    if(!Doctor){
        res.status(401).send({msg:"EMail not found"})
    }
    if(Doctor.password!=password){
        res.status(201).send({msg:"Password does not match"})
    }
    res.status(200).send(Doctor)
} catch (error) {
    console.log(error)
}
}

const doctorInfo=async(req,res)=>{
    try {
        const Doctor = await DoctorModel.find();
        res.status(200).send(Doctor)
    } catch (error) {
        console.log(error)  
    }
}

const searchDoctor=async(req,res)=>{
    try {
         const {name} = req.query;
    const Doctor = await DoctorModel.find({
        doctorname: {$regex: name, $options: "i"}
    })
    res.status(200).json(Doctor)
    } catch (error) {
         res.status(500).json({ message: "Error searching doctors", error });
    }
}

const searchDoctorByCity = async (req, res) => {
  try {
    const { city } = req.body;
   const doctor = await DoctorModel.find({
  city: { $regex: new RegExp(city, "i") }
});

    res.status(200).send(doctor);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getdoctorInfo=async(req, res)=>{
  const {id} = req.query;
  const Doctor = await DoctorModel.findById(id);
  res.send(Doctor);
}

const patientSave=async(req,res)=>{
const {id,patientname,deseases,address,contact,email} = req.body
const Patient = await patientModel.create({
    patientname:patientname,
    deseases:deseases,
    address:address,
    contactno:contact,
    email:email,
    docid:id
})
res.status(201).send("Patient detail save!!")
}

const getPatientDetail=async(req,res)=>{
          const {id} = req.query;
      const patient = await patientModel.find({docid:id})
      res.send(patient);

}

module.exports = {
     doctorSave,
     doctorLogin,
     doctorInfo,
     searchDoctor,
     searchDoctorByCity,
     getdoctorInfo,
     patientSave,
     getPatientDetail
 };
