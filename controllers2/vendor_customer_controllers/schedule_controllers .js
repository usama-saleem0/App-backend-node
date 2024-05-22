const Schedule = require("../../models/schedule.model");
const Makepayments = require("../../models/payments.model");

const { ObjectId } = require('mongodb');




// Vendor creates a schedule
const createSchedule = async (req, res) => {
    const {
        vendorId,
        customerId,
        customerJobDetails,
        customerDetails,
        vendorBudget,
        status,
        time,
        date,
        Paystatus
    } = req.body;

    try {
        // Check if there is an existing schedule for the customer
        // const existingSchedule = await Schedule.findOne({ customerId, status: 'pending' });

        // if (existingSchedule) {
        //     return res.status(400).json({
        //         message: "A schedule is already pending for this customer. Cannot create a new schedule."
        //     });
        // }

        // If no existing schedule, create a new one

        const newSchedule = await Schedule.create({
            vendorId,
            customerId,
            customerJobDetails,
            customerDetails,
            vendorBudget,
            status,
            time,
            date,
            Paystatus
        });

        return res.json({
            message: "Create Successfully",
            data: newSchedule
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};



// const createPayments = async (req, res) => {
//     const {
//         duration,
//         cost,
//         vendorId,
//         customerId
        
//     } = req.body;

//     try {
      
//         const newPayment = await Makepayments.create({
//             duration,
//             cost,
//             vendorId,
//         customerId
//         });

//         return res.json({
//             message: "Create Successfully",
//             data: newPayment
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// };

const createPayments = async (req, res) => {
    const {
        duration,
        cost,
        vendorId,
        customerId
    } = req.body;

    try {
        // Find the first corresponding Schedule record
        const scheduleRecord = await Schedule.findOne({
            vendorId,
            customerId
        });

        // const updatedScheduleRecord = await Schedule.findByIdAndUpdate(
        //     { vendorId, customerId },
        //     { $set: { vendorBudget: cost } },
        //     { new: true }
        // );
        
        // console.log("Updated Schedule Record:", updatedScheduleRecord);

        if (scheduleRecord) {
            console.log("Schedule Record:", scheduleRecord.Paystatus);
            // console.log("Updating vendorBudget with cost:", cost);
            scheduleRecord.vendorBudget = cost;
            scheduleRecord.Paystatus = "Payment Created";


            // Save the updated Schedule record
            await scheduleRecord.save();
          
        }


        else{
            return res.status(404).json({
                message: "To Create a Quote, you have To Pick a Time."
            });
        }


        
        // Update the vendor_budget field in the Schedule record with cost value only for the first match
        // if (typeof scheduleRecord.vendorBudget === 'undefined') {
        //     scheduleRecord.vendorBudget = cost;

        //     // Save the updated Schedule record
        //     await scheduleRecord.save();
        // }

        // Create a new payment record
        const newPayment = await Makepayments.create({
            duration,
            cost,
            vendorId,
            customerId
        });

        return res.json({
            message: "Create Successfully",
            data: newPayment
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};



// Customer responds to a schedule (accept or reject)

const editCreatedSchedule = async (req, res) => {
    const { scheduleId } = req.body
    try {
        const editData = await Schedule.findOneAndUpdate({ _id: scheduleId }, {
            Paystatus: "Paid"
        })
        res.status(200).send({ message: "Updated Schedule ", data: editData });

        // findOneAndUpdate({ customerId: userSocket.customerId, vendorId: userSocket.vendorId }
    } catch (error) {

    }
}
const respondToSchedule = async (req, res) => {
    const { scheduleId, response } = req.body;

    try {
        let updatedSchedule;

        if (response === 'accepted') {
            // Update the schedule status to 'accepted'
            updatedSchedule = await Schedule.findByIdAndUpdate(scheduleId, { status: 'accepted' }, { new: true });
        } else if (response === 'rejected') {
            // Delete the schedule
            updatedSchedule = await Schedule.findByIdAndDelete(scheduleId);
        } else {
            return res.status(400).send('Invalid response');
        }

        res.json(updatedSchedule);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getVendorSchedules = async (req, res) => {
    const { vendorId } = req.body;

    try {
        const vendorSchedules = await Schedule.find({ vendorId });

        res.json(vendorSchedules);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getCustomerSchedules = async (req, res) => {
    const { customerId } = req.body;
    // const customerId = "656f94b34b11f396e456aed4"; // Replace with the actual customerId

    try {
        const pipeline = [
            {
                $match: {
                    customerId: new ObjectId(customerId),
                },
            },
            {
                $lookup: {
                    from: "create_vendors",
                    localField: "vendorId",
                    foreignField: "_id",
                    as: "vendorDetails",
                },
            },
            {
                $unwind: {
                    path: "$vendorDetails",
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $project: {
                    mergedData: {
                        $mergeObjects: ["$$ROOT", "$vendorDetails"],
                    },
                },
            },
            {
                $addFields: {
                    "mergedData.scheduleId": "$_id",
                },
            },
            {
                $replaceRoot: {
                    newRoot: "$mergedData",
                },
            }
        ]

        const resultVariable = await Schedule.aggregate([...pipeline,]);

        if (resultVariable.length === 0) {
            return res.status(404).json({
                message: "No matching jobs found for the given query."
            });
        }
        return res.json({
            message: "Successfully Get",
            data: resultVariable
        });


    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};



module.exports = { createSchedule, respondToSchedule, getVendorSchedules, getCustomerSchedules, editCreatedSchedule , createPayments}


