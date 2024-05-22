const mongoose = require('mongoose');

const makepaymentSchema = new mongoose.Schema({
    
    duration: { type: String, 
        // required: true
    
    
    },
    cost: { type: String, 
        
        // required: true 
    
    },
    vendorId: { type: mongoose.Schema.Types.ObjectId, required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, required: true },

    FullInstallmentCost:{type:Number},

    InstallmentPerMonth: {type:Number},

    NumberofInstallments: {type: Number},

    createdAt: { type: Date, default: Date.now },
   
});

const Makepayments = mongoose.model('Makepayments', makepaymentSchema);

module.exports = Makepayments;
