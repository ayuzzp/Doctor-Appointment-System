
const multer = require("multer");
const  {v2} = require("cloudinary");
const  { CloudinaryStorage }= require("multer-storage-cloudinary");

// Cloudinary Config
v2.config({
 cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
 api_key: process.env.CLOUDINARY_API_KEY,
 api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Storage with Cloudinary
const storage = new CloudinaryStorage({
 cloudinary: v2,
 params: {
 folder: "mern_uploads", // folder name on Cloudinary
 allowed_formats: ["jpg", "png", "jpeg", "pdf"], // allowed file types
 },
});

const upload = multer({ storage: storage });

module.exports={
    upload
}