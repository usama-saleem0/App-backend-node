const mongoose = require('mongoose');

const { Schema } = mongoose;
const   Job_Count = mongoose.model('Job_Count', new Schema({
   
    count: {
        type: Number,
        required: true
    }
 



}, { timestamps: true }
))


module.exports = { Job_Count }
