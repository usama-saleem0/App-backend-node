const mongoose = require('mongoose');

const Review_Schema = new mongoose.Schema({


    VendorId: { type: mongoose.Schema.Types.ObjectId, required: true },
    CustomerId: { type: mongoose.Schema.Types.ObjectId, required: true },
    JobId: { type: mongoose.Schema.Types.ObjectId, required: true },
    SheduleId: { type: mongoose.Schema.Types.ObjectId, required: true },

    review: { type: String, required: true },

    cost: { type: String },

    selected_query: { type: String },
    

    rating: { type: Number , 
        // required: true 
    },
  
    createdAt: { type: Date, default: Date.now },
});

const Reviews = mongoose.model('Customer_Reviews', Review_Schema);

module.exports = Reviews;
