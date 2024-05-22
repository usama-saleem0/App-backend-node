const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    vendorId: { type: mongoose.Schema.Types.ObjectId, required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, required: true },
    customerJobDetails: { type: Object, required: true },
    customerDetails: { type: Object, required: true },
    vendorBudget: { type: Number, required: true },
    time: { type: String,
        //  required: true
         },
    date: { type: String,
        //  required: true
         },


    time0: { type: Number , 
        // required: true 
    },
    time1: { type: Number ,
        //  required: true 
        },
    time2:{ type: Number , 
        // required: true 
    },

    shedule_descriptions: {type: String,
    },

    NumberofInstallments: {
        type: Number
    }
    ,

    
    NumberofInstallmentsMatching: {
        type: Number
    }
,

    Installment_Date: {
        // type: Date,
        // default: Date.now,

        type: String
    },


    jobtime: {
        // type: Date,
        // default: Date.now,

        type: String
    },



    
    ReviewPosted: {
        // type: Date,
        // default: Date.now,

        type: String
    },


    Picked_Vendor: {
        // type: Date,
        // default: Date.now,

        type: String
    },

    gig_image: {
        type: String,
        required: true
    },

    Vendor_Name: {
        type: String,
        required: true
    },

    Vendor_Schedule_Descriptions: {
        type: String,
        required: true
    },

    cleaning_maintainance_date: {
        type: String,
       
    },

    



    status: { type: String, enum: ['pending', 'accepted', 'rejected','selected'], default: 'pending' },
    Paystatus: { type: String, enum: ['unPaid', 'Paid', ,'Payment Created'], default: 'unPaid' },
    createdAt: { type: Date, default: Date.now },
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
