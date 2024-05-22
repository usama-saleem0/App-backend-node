const Schedule = require("../../models/schedule.model");
const Makepayments = require("../../models/payments.model");

const { Customer_Job_Schema } = require("../../models/customer_job_model");



const { ObjectId } = require('mongodb');
const Reviews = require("../../models/review_model");


const  order_completed = async (req, res, next) => 
{

var {

    job_ID,
    _id


}
=req.body



console.log(req.body,"ORDER_COMPLETED")

try {
    // Validate the ID format (optional)
    // Find and delete the record
    const deletedShedule = await Schedule.findByIdAndDelete(_id);
    const deletedJob = await Schedule.findByIdAndDelete(job_ID);
    
    return res.json({
        message: 'Record deleted successfully',
        deletedShedule,
        deletedJob

    });
} catch (error) {
    return next(error);
}










}


// const add_review = async (req, res, next) => 
// {
//     try {
// var {

//     review,
//     rating,
   
//     JobId
 


// }
// =req.body



// console.log(req.body,"Review Posted")


    
//     // const customer_review = Reviews.create(req.body)

//     const schedule = await Schedule.findOne({ jobId: JobId });

//     if (!schedule) {
//         return res.status(404).json({ error: 'Schedule not found' });
//     }

//     if(schedule){

//         const store_user_data = {
//                 review,
//                 rating,
//                 SheduleId:schedule._id,
//                 CustomerId:schedule.customerId,
//                 VendorId:schedule.vendorId,
//                 JobId,
                

//         }

//          await Reviews.create({
//             ...store_user_data,
//         });
    




//     }

//     // 3. Update a specific attribute in the found schedule
//     schedule.ReviewPosted = "yes"; // Replace 'attributeToUpdate' and 'newValue' with the actual attribute and value you want to update
//     // await schedule.save();
//     console.log(schedule,"Schedule Review")

    
//     return res.json({
//         message: 'Review Posted Successfully',
//         customer_review
        
    

//     });


    



// } catch (error) {
//     return next(error);





// }










// }

const add_review = async (req, res, next) => {
    try {
        // Destructure the variables from req.body
        const { review, rating, JobId,selected_schedule_id } = req.body;

        console.log(req.body, "Review Posted");

        // Find the schedule based on JobId
        const schedule = await Schedule.findOne({ _id: selected_schedule_id });

        const update_job1= await Customer_Job_Schema.findOne({_id:JobId})


        if (!schedule) {
            // If schedule is not found, return 404 error
            return res.status(404).json({ error: 'Schedule not found' });
        }

        // Create store_user_data object with necessary details
        const store_user_data = {
            review,
            rating,
            SheduleId: schedule._id,
            CustomerId: schedule.customerId,
            VendorId: schedule.vendorId,
            JobId,
            cost:schedule.vendorBudget,
            selected_query:update_job1.selected_queries
        };

        // Create the review
        const customer_review = await Reviews.create(store_user_data);

        // Update the schedule to indicate that a review has been posted
        schedule.ReviewPosted = "yes";
        // Save the updated schedule (uncomment if needed)
        // await schedule.save();

        console.log(schedule, "Schedule Review");


        const update_job= await Customer_Job_Schema.findOne({_id:JobId})
        update_job.phase='Order Completed'
        update_job.save()




        // Return success response
        return res.json({
            message: 'Review Posted Successfully',
            customer_review
        });
    } catch (error) {
        // Handle errors
        return next(error);
    }
}



const picked_vendor = async (req,res,next)=>{

    var {

        SheduleID

    }=req.body

    console.log("Picked Vendor", req.body)



    
try {
    
    

    const schedule = await Schedule.findOne({ _id: SheduleID});

    if (!schedule) {
        return res.status(404).json({ error: 'Schedule not found' });
    }

    // 3. Update a specific attribute in the found schedule
    schedule.Picked_Vendor = "yes"; // Replace 'attributeToUpdate' and 'newValue' with the actual attribute and value you want to update
    await schedule.save();

    
    return res.json({
        message: 'Picked Vendor Successfully Posted',
       
        
    

    });


    



} catch (error) {
    return next(error);

}







}





module.exports = {
order_completed,
add_review,
picked_vendor

}