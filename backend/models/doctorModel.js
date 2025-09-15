const mongoose = require('mongoose')

const doctorSchema = new  mongoose.Schema(
    {
        doctorname: {
            type: String,
            required: true,
        }, 
        speciality: {
            type: String,
            required: true,
        },
         city: {
            type: String,
            required: true,
        },
         address: {
            type: String,
            required: true,
        },
         image: {
            type: String,
            required: true,
        },
         contact: {
            type: String,
            required: true,
        },
         email: {
            type: String,
            required: true,
        },
         password: {
            type: String,
            required: true,
        }
        
    }, {timestamps: true}
)

module.exports = mongoose.model('doctor', doctorSchema)