const Schedule = require("../../models/schedule.model");
const Makepayments = require("../../models/payments.model");

const { Customer_Job_Schema } = require("../../models/customer_job_model");



const { ObjectId } = require('mongodb');
const { Vendor_Gig_Schema } = require("../../models/vendor_gig_model");
const { Vendor_Schema } = require("../../models/vendor_model");







// Vendor creates a schedule

// Ts work
// const createSchedule = async (req, res) => {
//     var {
//         vendorId,
//         customerId,
//         customerJobDetails,
//         customerDetails,
//         vendorBudget,
//         status,
//         time,
//         date,
//         Paystatus,
//         time0,
//         time1,
//         time2,

//         jobId,

//         shedule_descriptions,

//         // customer_job_id




//     } = req.body;

//     console.log(jobId,"shedulecreatedadasddas")
//     console.log(req.body,"shedulecreatedadasddas CUSTOMER JOB")
//     // var i =req.body.index

//     // if(req.body.index==0)
//     // {
//     //     time0=0
//     // }
//     // else if(req.body.index==1)
//     // {
//     //     time1=1
//     // }
//     // else{
//     //     time2=2
//     // }

//     time1=req.body.index


   

//     try {
//         // Check if there is an existing schedule for the customer
//         // const existingSchedule = await Schedule.findOne({ customerId, status: 'pending' });

//         // if (existingSchedule) {
//         //     return res.status(400).json({
//         //         message: "A schedule is already pending for this customer. Cannot create a new schedule."
//         //     });
//         // }

//         // If no existing schedule, create a new one

//         // const customerJob = await Customer_Job_Schema.findOne({ _id: jobId })

        
//         //     if (customerJob) 
//         //     {
//         //         console.log(customerJob,"id found")
//         //         await Customer_Job_Schema.create({
//         //             time1
                    
//         //         });
//         //     }
        
// // tststststs
//         // const customerJob = await Customer_Job_Schema.findOne({ _id: jobId });

//         // if (customerJob && customerJob.availablity_time[time1].date != '2000-01-01' ) {
//         //     console.log(customerJob, "id found");
        
//         //     // Update the existing record with the new time1 value
//         //     await Customer_Job_Schema.updateOne(
//         //         { _id: jobId },
//         //         // { $set: { time1: time1} }
//         //         // { $pull: { availablity_time: { date: customerJob.availablity_time[time1].date } } }
//         //         { 
//         //             // $unset: { [`availablity_time.${time1}`]: 1 }
//         //             // $set: { [`availablity_time.${time1}`]: 1 }
//         //         }
//         //     );
        
//         //     console.log(`Successfully updated time1 attribute for _id ${jobId}`);
//         // } 

//         // else if(customerJob && customerJob.availablity_time[time1].date === '2000-01-01' && shedule_descriptions.toLowerCase() === "yes" )
//         // {
//         //     await Customer_Job_Schema.updateOne(

//         //         {_id: jobId},

//         //         {
//         //             $set:{amount:''}
//         //         }

            



//         //     )

//         //     console.log("LANDSCAPER AMOUNT REMOVED")

//         // }




//         // else {
//         //     console.log(`No record found for _id ${jobId}`);
//         // }

      

//         // const save_time = await Customer_Job_Schema.create({
//         //     time1
            
//         // });
//         // TSTSTSTSTSTST


//         if(shedule_descriptions.toLowerCase() !== 'no')

//         {
//             const get_vendor_profilepic = await Vendor_Gig_Schema.findOne({vender_id:vendorId})

//             const vendor_info = await Vendor_Schema.findById(vendorId)

//             const vendor_name= vendor_info.Name
//             const vendor_selected_queries=vendor_info.selected_queries[0]


             

//             if(get_vendor_profilepic.gig_image)
//             {

//             console.log("here")

//             const newSchedule = await Schedule.create({
//                 vendorId,
//                 customerId,
//                 jobId,
//                 customerJobDetails,
//                 customerDetails,
//                 vendorBudget,
//                 status,
//                 time,
//                 date,
//                 Paystatus,
//                 shedule_descriptions,
//                 gig_image:get_vendor_profilepic.gig_image,
//                 Vendor_Schedule_Descriptions:vendor_selected_queries,
//                 Vendor_Name:vendor_name
               
    
//             }); 

//             // const updatephase = await Customer_Job_Schema.findById({_id:jobId})
//             const updatephase = await Customer_Job_Schema.findById({_id:jobId})
//             if(updatephase.phase!='Currently in a Vendor Vist Phase' || updatephase.selected_queries==="Landscaping")
//                 {
//                     updatephase.phase='Currently in Pick a Vendor Phase'
//                     // updatephase.save()

//                     if( updatephase.selected_queries==="Landscaping"){

//                     updatephase.phase='Currently in Pick a Vendor Phase'
//                     // updatephase.save()
//                     const newSchedule = await Schedule.create({
//                         vendorId,
//                         customerId,
//                         jobId,
//                         customerJobDetails,
//                         customerDetails,
//                         vendorBudget,
//                         status:'accepted',
//                         time,
//                         date,
//                         Paystatus,
//                         shedule_descriptions,
//                         gig_image:get_vendor_profilepic.gig_image,
//                         Vendor_Schedule_Descriptions:vendor_selected_queries,
//                         Vendor_Name:vendor_name
                       
            
//                     }); 
//                 }


//                 updatephase.save()



//                 }



//                 // if(updatephase.selected_queries==="Landscaping")
//                 //     {   
//                 //         updatephase.phase='Currently in Pick a Vendor Phase'
//                 //         updatephase.save()
//                 //     }

          

            





//             console.log(updatephase,"UpdatePhaseJOBDATA")


//             return res.json({
//                 message: "Create Successfully",
//                 data: newSchedule
//             });


       



//         }
//         else {

//             const newSchedule = await Schedule.create({
//                 vendorId,
//                 customerId,
//                 jobId,
//                 customerJobDetails,
//                 customerDetails,
//                 vendorBudget,
//                 status,
//                 time,
//                 date,
//                 Paystatus,
//                 shedule_descriptions,
              
    
//             }); 
//             const updatephase = await Customer_Job_Schema.findById({_id:jobId})

//             updatephase.phase='Currently in Pick a Vendor Phase'
//             updatephase.save()

            





//             console.log(updatephase,"UpdatePhaseJOBDATA")


//             return res.json({
//                 message: "Create Successfully",
//                 data: newSchedule
//             });



            



//         }

           

            
                   
//         }
//         else {
//             res.status(500).send('Shedule Not Created')
//         }

//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// };


// gpt modify

const createSchedule = async (req, res) => {
    var {
        vendorId,
        customerId,
        customerJobDetails,
        customerDetails,
        vendorBudget,
        status,
        time,
        date,
        Paystatus,
        time0,
        time1,
        time2,
        jobId,
        shedule_descriptions,
    } = req.body;

    time1 = req.body.index;

    try {
        if (shedule_descriptions.toLowerCase() !== 'no') {
            const get_vendor_profilepic = await Vendor_Gig_Schema.findOne({ vender_id: vendorId });
            const vendor_info = await Vendor_Schema.findById(vendorId);
            const vendor_name = vendor_info.Name;
            const vendor_selected_queries = vendor_info.selected_queries[0];

            const maintainence_job = await Customer_Job_Schema.findById(jobId)

            const aa=maintainence_job.amount

            console.log(maintainence_job.choose_service,"Choose Service ",aa)


            if (get_vendor_profilepic && get_vendor_profilepic.gig_image) {
                let newStatus = status;
                let phase = 'Currently in a Vendor Visit Phase';
                const phase1 = "Decide Between Quotes"

                // Check if selected_queries is 'Landscaping'
                if (vendor_selected_queries.toLowerCase() === 'landscaping' || vendor_selected_queries.toLowerCase() === 'cleaning' || maintainence_job.choose_service==="Maintenance") {
                    newStatus = 'accepted'; // Change status to 'accepted' if selected_queries is 'Landscaping'



                    
                }

                // Create the schedule document
                const newSchedule = await Schedule.create({
                    vendorId,
                    customerId,
                    jobId,
                    customerJobDetails,
                    customerDetails,
                    vendorBudget,
                    status: newStatus,
                    time,
                    date,
                    Paystatus,
                    shedule_descriptions,
                    gig_image: get_vendor_profilepic.gig_image,
                    Vendor_Schedule_Descriptions: vendor_selected_queries,
                    Vendor_Name: vendor_name,
                    cleaning_maintainance_date:aa
                });

                // Update the phase if necessary
                const updatephase = await Customer_Job_Schema.findById({ _id: jobId });
                if (!updatephase) {
                    return res.status(404).json({ message: 'Job not found' });
                }
                if (updatephase.phase !== 'Currently in a Vendor Visit Phase' || vendor_selected_queries.toLowerCase() === 'landscaping'||vendor_selected_queries.toLowerCase() === 'cleaning') {
                    updatephase.phase = phase;
                    await updatephase.save();
                }

                if(vendor_selected_queries.toLowerCase() === 'landscaping'||vendor_selected_queries.toLowerCase() === 'cleaning'||updatephase.choose_service==='Maintenance')
                    {
                        updatephase.phase = phase1;
                        await updatephase.save();
                    }

                return res.json({
                    message: 'Create Successfully',
                    data: newSchedule,
                });
            } else {
                // Handle case where vendor profile pic is missing
                return res.status(400).json({
                    message: 'Vendor profile pic not found',
                });
            }
        } else {
            // Handle case where shedule_descriptions is 'no'
            const newSchedule = await Schedule.create({
                vendorId,
                customerId,
                jobId,
                customerJobDetails,
                customerDetails,
                vendorBudget,
                status,
                time,
                date,
                Paystatus,
                shedule_descriptions,
                cleaning_maintainance_date:aa
            });

            const updatephase = await Customer_Job_Schema.findById({ _id: jobId });
            if (!updatephase) {
                return res.status(404).json({ message: 'Job not found' });
            }
            updatephase.phase = 'Currently in a Vendor Visit Phase';
            await updatephase.save();

            return res.json({
                message: 'Create Successfully',
                data: newSchedule,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};









const updateInstallment = async (req, res) => {
    try {
        var { id1, i_num } = req.body;

        console.log(req.body,"TS");

        const currentDate = new Date(); // Get the current date
        const isoDateString = currentDate.toISOString();


       
            const dateObject = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const dt= new Intl.DateTimeFormat('en-US', options).format(dateObject);
            let num;


        const updatedDocument = await Schedule.findOneAndUpdate(
            { _id: id1 },
            {
        
                
                $set: {
                    Installment_Date:dt,
                    // NumberofInstallmentsMatching: parseInt(i_num)+1,
                },

                $inc: {
                    NumberofInstallmentsMatching: 1,
                  },
            },
            { new: true } 
        );

        if (updatedDocument) {
            console.log('Document updated successfully:', updatedDocument);
            res.json({ message: 'Document updated successfully', data: updatedDocument });
        } else {
            console.log('Document not found with the provided ID:', id1);
            res.status(404).json({ message: 'Document not found with the provided ID' });
        }
    } catch (error) {
        console.error('Error updating document:', error);
       
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
        customerId,
        FullInstallmentCost,
        InstallmentPerMonth,
        NumberofInstallments,
        jobtime
    } = req.body;
                        console.log(req.body,"Create payment vendor schedule")
    try {
        // Find the first corresponding Schedule record
        const scheduleRecord = await Schedule.findOne({
            vendorId,
            customerId
        });


        // if (scheduleRecord) {
        //     console.log("Schedule Record:", scheduleRecord.Paystatus);
        //     // console.log("Updating vendorBudget with cost:", cost);

        //     if(cost==null && InstallmentPerMonth==!null)
        //     {
                    
        //     scheduleRecord.vendorBudget = InstallmentPerMonth;
        //     scheduleRecord.Paystatus = "Payment Created";
        //     }

        //     else if(cost==!null && InstallmentPerMonth==null)
        //     {
        //         scheduleRecord.vendorBudget = cost;
        //         scheduleRecord.Paystatus = "Payment Created";
        //     }

        //     // scheduleRecord.vendorBudget = cost;
        //     // scheduleRecord.Paystatus = "Payment Created";


        //     // Save the updated Schedule record
        //     await scheduleRecord.save();
          
        // }

        if (scheduleRecord) {
            console.log("Schedule RecordTS:", scheduleRecord.Paystatus);
        
                if(cost){
                    console.log(cost,"costtttt")
                    scheduleRecord.vendorBudget = cost;
                    scheduleRecord.Paystatus = "Payment Created";
                    scheduleRecord.shedule_descriptions=duration
                    scheduleRecord.jobtime=jobtime
                    await scheduleRecord.save();
                }

                 if (InstallmentPerMonth)
                {   
                    console.log(InstallmentPerMonth,"Installmentttt")
                    scheduleRecord.vendorBudget = InstallmentPerMonth;
                    scheduleRecord.Paystatus = "Payment Created";
                    scheduleRecord.NumberofInstallments =NumberofInstallments;
                    scheduleRecord.NumberofInstallmentsMatching=1;
                    await scheduleRecord.save();
                }

            // if (cost == null && InstallmentPerMonth !== null) {
            //     console.log(InstallmentPerMonth,"INSTALLment")
            //     scheduleRecord.vendorBudget = InstallmentPerMonth;
            //     scheduleRecord.Paystatus = "Payment Created";
            // } else if (cost !== null && InstallmentPerMonth == 0) {
            //     console.log(cost,"cost")
            //     scheduleRecord.vendorBudget = cost;
            //     scheduleRecord.Paystatus = "Payment Created";
            // }
        
            // Save the updated Schedule record
          
        }
        

        else{
            return res.status(404).json({
                message: "To Create a Quote, you have To Pick a Time."
            });
        }


        // Create a new payment record
        const newPayment = await Makepayments.create({
            duration,
            cost,
            vendorId,
            customerId,
            FullInstallmentCost,
            InstallmentPerMonth,
            NumberofInstallments,
           
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
const   respondToSchedule = async (req, res) => {
    const { scheduleId, response } = req.body;

    console.log(req.body,"selected_job_body")

    try {
        let updatedSchedule;

        if (response === 'accepted') {
            // Update the schedule status to 'accepted'
            updatedSchedule = await Schedule.findByIdAndUpdate(scheduleId, { status: 'accepted' }, { new: true });

            const getjobid = await Schedule.findById({_id:scheduleId})

            const job_id = getjobid.jobId

            const update_job_details= await Customer_Job_Schema.findByIdAndUpdate({_id:job_id})

            update_job_details.phase="Currently in a Vendor Visit Phase"

            console.log(update_job_details,"schedule change vendor respond")



            update_job_details.save()



        } else if (response === 'rejected') {
            // Delete the schedule
            updatedSchedule = await Schedule.findByIdAndDelete(scheduleId);
        } 

        else if (response === 'selected')
        {

            updatedSchedule = await Schedule.findByIdAndUpdate(scheduleId, { status: 'selected' }, { new: true });

                getjobid= await Schedule.findOne({_id:scheduleId})

                const jobid= getjobid.jobId

                update_job= await Customer_Job_Schema.findOne({_id:jobid})
                update_job.phase="Pay the Vendor"
                update_job.save();

            // updatedSchedule.status="selected"

            // updatedSchedule.save()

            console.log("selected",updatedSchedule)


        }
        
        
        
        
        
        else {
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

// const getCustomerSchedules = async (req, res) => {
//     const { customerId } = req.body;
//     // const customerId = "656f94b34b11f396e456aed4"; // Replace with the actual customerId

//     try {
//         const pipeline = [
//             {
//                 $match: {
//                     customerId: new ObjectId(customerId),
//                 },
//             },
//             {
//                 $lookup: {
//                     from: "create_vendors",
//                     localField: "vendorId",
//                     foreignField: "_id",
//                     as: "vendorDetails",
//                 },
//             },
//             {
//                 $unwind: {
//                     path: "$vendorDetails",
//                     preserveNullAndEmptyArrays: true,
//                 },
//             },
//             {
//                 $project: {
//                     mergedData: {
//                         $mergeObjects: ["$$ROOT", "$vendorDetails"],
//                     },
//                 },
//             },
//             {
//                 $addFields: {
//                     "mergedData.scheduleId": "$_id",
//                 },
//             },
//             {
//                 $replaceRoot: {
//                     newRoot: "$mergedData",
//                 },
//             }
//         ]

//         const resultVariable = await Schedule.aggregate([...pipeline,]);

//         if (resultVariable.length === 0) {
//             return res.status(404).json({
//                 message: "No matching jobs found for the given query."
//             });
//         }
//         return res.json({
//             message: "Successfully Get",
//             data: resultVariable
//         });


//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// };
const getCustomerSchedules = async (req, res) => {
    const { customerId } = req.body;

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
                    _id: 1, // Include the _id field from the Schedule collection
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
        ];

        const resultVariable = await Schedule.aggregate([...pipeline]);

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




module.exports = { createSchedule, respondToSchedule, getVendorSchedules, getCustomerSchedules, editCreatedSchedule , createPayments, updateInstallment}


