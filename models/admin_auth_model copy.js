const mongoose = require('mongoose');

const { Schema } = mongoose;
const   Admin_Auth_Schema = mongoose.model('Admin', new Schema({
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    }
        ,
    selected_queries: {
        type: Array,
        required: true
    },
    phoneno: {
        type: Number,
        required: true
    },
    expert_profile_picture: {
        type: String,
        required: true
    },

    expert_driving_license: {
        type: Array,
        required: true
    },




}, { timestamps: true }
))


module.exports = { Admin_Auth_Schema }
