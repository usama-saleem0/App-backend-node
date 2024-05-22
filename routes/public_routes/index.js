const express = require('express');
const { register_user, login_user, verify_reset_password_OTP, reset_user_password_request, verify_OTP_and_create_password, reset_user_password_requestv, verify_reset_password_OTPv, verify_OTP_and_create_passwordv, reset_user_password_requeste, verify_reset_password_OTPe, verify_OTP_and_create_passworde, } = require('../../controllers/auth_controllers');
const { upload_image_contoller } = require('../../controllers/upload_files_controllers/upload_images_cont.js');
const { create_customer, login_customer, create_customer_job, get_createed_job_by_user_id, get_customer_profile_by_id, get_matching_vendors, get_vendors_recent_chats,save_image1, update_customer, get_customer_details, customer_bank, update_user_record, get_vendor_profile, deletejob, get_single_job_details, get_selected_vendor_details, view_vendor_quote } = require('../../controllers/vendor_customer_controllers/customer_controllers.js');
const { create_vendor, save_image ,get_all_customers, get_vendor_git_by_id, get_vendor_profile_by_id, login_vendor, create_vendor_gig, get_matching_job, get_customers_recent_chats, delete_vendor_gig, delete_expert_gig, get_expert_gig_by_id, create_expert_gig } = require('../../controllers/vendor_customer_controllers/vendor_controllers.js');
const { saveMessage, getMessages } = require('../../controllers/chatController/chatController.js');
const { createSchedule, createPayments ,respondToSchedule, getVendorSchedules, getCustomerSchedules, editCreatedSchedule, updateInstallment } = require('../../controllers/vendor_customer_controllers/schedule_controllers .js');
const { admin_register_user, admin_login, get_upcoming_msg_in_admin_panel } = require('../../controllers/admin_controller/admin_controller.js');
const router = express.Router()
const paypalIntegration = require('../../controllers/paypal_controller/paypal_controller.js');
const Payment = require('../../models/stripe_model.js');
const { talk_to_expert, email_Ross } = require('../../controllers/talk_to_expert_controller/talk_to_expert.js');
const { get_admin } = require('../../controllers/admin_controller/getadmincontroller.js');



const stripe = require('stripe')('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');




// const { token } = await stripe.createToken({ name: 'Test User' });

const {order_completed, add_review, picked_vendor} = require('../../controllers/order_completed_controller/order_completed_controller.js');
const Schedule = require('../../models/schedule.model.js');
const { Customer_Job_Schema } = require('../../models/customer_job_model.js');
const { get_all_jobs, get_all_vendors, get_all_customers_admin, get_all_schedules_admin, get_all_reviews_admin, get_all_payments_admin, Customer_Vendor_Job_Details, get_vendor_profile_admin, get_customer_profile_data, create_dylan, login_dylan } = require('../../controllers/Dylan_Controller/Dylan_Controller.js');

router.post('/register', register_user)
router.post('/login', login_user)


router.post('/reset-password-req', reset_user_password_request)
router.post('/reset-password-otp-verify', verify_reset_password_OTP)
router.post('/reset-password-create', verify_OTP_and_create_password)



// vendor forget password
router.post('/reset-password-reqv', reset_user_password_requestv)
router.post('/reset-password-otp-verifyv', verify_reset_password_OTPv)
router.post('/reset-password-createv', verify_OTP_and_create_passwordv)

// expert forget password
router.post('/reset-password-reqe', reset_user_password_requeste)
router.post('/reset-password-otp-verifye', verify_reset_password_OTPe)
router.post('/reset-password-createe', verify_OTP_and_create_passworde)


// Admin Routes



router.get('/getalljobs',get_all_jobs)
router.get('/getallvendors',get_all_vendors)
router.get('/getallcustomers',get_all_customers_admin)
router.get('/getallschedules',get_all_schedules_admin)
router.get('/getallreviews',get_all_reviews_admin)
router.get('/getallpayments',get_all_payments_admin)





router.get('/get_vendor_customer_job_details/:id',Customer_Vendor_Job_Details)


// router.get('/get_vendor_customer_job_detailsTT/:id',Customer_Vendor_Job_Details)

router.get('/admin_customer_profile/:id',get_customer_profile_data)


router.post('/create-admin-honest',create_dylan)






// 








router.post('/upload-files', upload_image_contoller)
// upload-files

// create user profile 
router.post('/create-customer', create_customer)




router.get('/getcustomerdetails/:id', get_customer_details)   


router.post('/login-customer', login_customer)
router.post('/create-customer-job', create_customer_job)

router.post('/get-customer-job-by-id', get_createed_job_by_user_id)

router.get('/get-customer-profile/:id', get_customer_profile_by_id)

router.post('/create-vendor', create_vendor)
router.post('/save-image-path', save_image)

// TS work
router.post('/save-customerimage-path', save_image1)

router.post('/login-vendor', login_vendor)


router.get('/get-all-customer', get_all_customers)
router.post('/create-vendor-gig', create_vendor_gig)

router.post('/delete-vendor-gig', delete_vendor_gig)


router.put('/updatecustomer/:id', update_customer)   

router.post('/customercreatebank', customer_bank)

router.post('/updateuserdetails', update_user_record)

router.get('/getjobdetails/:id',get_single_job_details)



router.get('/get_vendor_profile_admin/:id',get_vendor_profile_admin)



router.get('/getselectedjobdetails/:id',get_selected_vendor_details)

router.post('/get-gig-by-id', get_vendor_git_by_id)
router.post('/get-all-matching-vendors', get_matching_vendors)
router.get('/get-vendor-profile/:id', get_vendor_profile_by_id)
router.post('/get-matching-jobs', get_matching_job)


// chat app  routes
router.post('/sendMessage', saveMessage)
router.get('/getMessages', getMessages)
router.post('/get-vendors-recent-chat', get_vendors_recent_chats)
router.post('/get-customers-recent-chat', get_customers_recent_chats)


//  Schedule Routes
router.post('/create-schedule', createSchedule);
router.post('/create-payment', createPayments);
router.post('/update-shedule', updateInstallment);

router.post('/respond-to-schedule', respondToSchedule);
router.post('/edit-schedule', editCreatedSchedule);
router.post('/vendor-schedules', getVendorSchedules);
router.post('/customer-schedules', getCustomerSchedules);

// Admin Routes
router.post('/admin-register', admin_register_user);
router.post('/admin-login', admin_login);
router.get('/get-upcoming-req', get_upcoming_msg_in_admin_panel);
router.post('/create-req', talk_to_expert);


router.post('/send-email-ross',email_Ross)


router.post('/login-admin-honest', login_dylan)



// TS
router.get('/getadmin/:id',get_admin);
router.post('/delete-expert-gig', delete_expert_gig)

router.post('/order_completed', order_completed)

router.post ('/customer_review',add_review)


router.post ('/postpickedvendor',picked_vendor)


router.get("/view_vendor_profile/:id",get_vendor_profile)


// router.get("/view_vendor_quote/:id",view_vendor_quote)

router.post("/view_vendor_quote",view_vendor_quote)





router.post('/get-expert-gig-by-id', get_expert_gig_by_id)
router.post('/create-expert-gig', create_expert_gig)


router.post('/deletejob',deletejob)




// router.post('/create-payment', async (req, res) => {
//     try {
//         const { amount, customerId, vendorId, scheduleId } = req.body;
//         const payment = await paypalIntegration.createPayment(
//             amount,
//             customerId,
//             vendorId,
//             scheduleId
//         );
//         res.json({ paymentId: payment.id });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// router.get('/success', async (req, res) => {
//     const payerId = req.query.PayerID;
//     const paymentId = req.query.paymentId;

//     try {
//         const executePaymentResponse = await paypalIntegration.executePayment(
//             paymentId,
//             payerId
//         );

//         const customData = JSON.parse(
//             executePaymentResponse.transactions[0].custom
//         );

//         // Save payment information to the database
//         const paymentData = {
//             ...customData,
//             paymentId: executePaymentResponse.id,
//         };
//         const savedPayment = await Payment.create(paymentData);

//         // Notify the vendor about successful payment (console.log for simplicity)
//         console.log(`Payment received successfully: ${savedPayment._id}`);

//         res.send('Payment successful!');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// router.get('/cancel', (req, res) => {
//     res.send('Payment canceled.');
// });


// router.post('/charge', async (req, res) => {
//     const { amount, currency, source, description } = req.body;
//     try {
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency,
//             source: token.id,
//             description,
//         });
//         res.json({ clientSecret: paymentIntent.client_secret });
//     } catch (error) {
//         console.error(error);
//         res.status(500).end();
//     }
// });



// router.post('/create-payment-intent', async (req, res) => {
//     // const { amount } = req.body;
//     const amountInCents = 200; // 2000 cents = $20.00

//     const amountString = amountInCents.toString() + '00';

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: amountString,
//         currency: 'usd',
//     });

//     res.json({ clientSecret: paymentIntent.client_secret });
// });
router.post('/create-payment-intent', async (req, res) => {
    const { amount,J_ID } = req.body;

    

  try {

  

    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
    });

    if(J_ID){
        console.log(req.body,"price")
        const update_schedule = await Schedule.findOne({jobId:J_ID})
        update_schedule.Paystatus='Paid'
       await update_schedule.save()



    }



    res.json({ clientSecret: paymentIntent.client_secret });
    console.log({ clientSecret: paymentIntent.client_secret },"Client Secret")
}

catch(error){
    res.json(error)
}

});



router.post('/updatescheduleandcustomerjob', async (req, res) => {
    const { amount,J_ID,schedule_id } = req.body;

    

  try {

  

    

    
        console.log(J_ID,"price")
        // const update_schedule = await Schedule.findOne({jobId:J_ID})
        const update_schedule = await Schedule.findOne({_id:schedule_id})
        update_schedule.Paystatus='Paid'
       await update_schedule.save()


    const update_job = await Customer_Job_Schema.findOne({_id:J_ID})
    update_job.phase='Chat Now And Review'
    await update_job.save()



       res.json({ update_schedule });
       console.log(update_schedule,"Client Secret")

    



   
}

catch(error){
    res.json(error)
}

});




router.post('/updateinstallmentscheduleandcustomerjob', async (req, res) => {
    const { amount,J_ID,numberofinstallments_matching,numberofinstallments,schedule_id } = req.body;

    

  try {

  

    

    
        console.log(req.body,"Installment New details")
        // const update_schedule = await Schedule.findOne({jobId:J_ID})

        const update_schedule = await Schedule.findOne({_id:schedule_id})
        

        

            const total_number_of_installments= update_schedule.NumberofInstallments
            if(total_number_of_installments!=numberofinstallments_matching)
            {
                update_schedule.NumberofInstallmentsMatching=numberofinstallments_matching+1
                await update_schedule.save()
                // const update_job = await Customer_Job_Schema.findOne({_id:J_ID})
                // update_job.phase='Pay Installment'+(numberofinstallments_matching+1)
                // await update_job.save()
            }
           
            else{

                    update_schedule.Paystatus='Paid'
                    const update_job = await Customer_Job_Schema.findOne({_id:J_ID})
                    update_job.phase='Chat Now And Review'
                    await update_job.save()
                

            }


       


    // const update_job = await Customer_Job_Schema.findOne({_id:J_ID})
    // update_job.phase='Chat Now And Review'
    // await update_job.save()



    //    res.json({ update_schedule });
    //    console.log(update_schedule,"Client Secret")

    



   
}

catch(error){
    res.json(error)
}

});








router.post('/save-payment-details', async (req, res) => {
    const { customerId, vendorId, amount } = req.body;

    try {
        const payment = new Payment({
            customerId,
            vendorId,
            amount,
        });

        await payment.save();

        res.json({ success: true, message: 'Payment details saved successfully' });
    } catch (error) {
        console.error('Error saving payment details:', error);
        res.status(500).json({ success: false, message: 'Error saving payment details' });
    }
});









module.exports = router