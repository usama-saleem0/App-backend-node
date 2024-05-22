const mongoose = require('mongoose');

const { Schema } = mongoose;
const Create_admin_dylan = mongoose.model('create_admin_dylan', new Schema({

    type: {
        type: String,
        // required: true
    },
    Profile_Image: {
        type: String,
        // required: true
    },
    Name: {
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
    Home_Address: {
        type: String,
        // required: true
    },
    zipCode: {
        type: Number,
        // required: true
    },
    phoneno: {
        type: Number,
        // required: true
    },
    




    bankName: {
        type: String,
        // required: true
    },
    accountName: {
        type: String,
        // required: true
    },
    accountNumber: {
        type: String,
        // required: true
    },
    iban : {
        type: String,
        // required: true
    },




}, { timestamps: true }
))


module.exports = { Create_admin_dylan }
