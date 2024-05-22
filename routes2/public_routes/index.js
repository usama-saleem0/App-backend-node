const express = require('express');
const { register_user, login_user, verify_reset_password_OTP, reset_user_password_request, verify_OTP_and_create_password, } = require('../../controllers/auth_controllers');
const { upload_image_contoller } = require('../../controllers/upload_files_controllers/upload_images_cont.js');
const { create_customer, save_image1 ,login_customer, create_customer_job, get_createed_job_by_user_id, get_customer_profile_by_id, get_matching_vendors, get_vendors_recent_chats, update_customer } = require('../../controllers/vendor_customer_controllers/customer_controllers.js');
const { create_vendor, save_image ,get_all_customers, get_vendor_git_by_id, get_vendor_profile_by_id, login_vendor, create_vendor_gig, get_matching_job, get_customers_recent_chats } = require('../../controllers/vendor_customer_controllers/vendor_controllers.js');
const { saveMessage, getMessages } = require('../../controllers/chatController/chatController.js');
const { createSchedule, createPayments ,respondToSchedule, getVendorSchedules, getCustomerSchedules, editCreatedSchedule, updateInstallment } = require('../../controllers/vendor_customer_controllers/schedule_controllers .js');
const { admin_register_user, admin_login, get_upcoming_msg_in_admin_panel } = require('../../controllers/admin_controller/admin_controller.js');
const router = express.Router()
const paypalIntegration = require('../../controllers/paypal_controller/paypal_controller.js');
const Payment = require('../../models/stripe_model.js');
const { talk_to_expert } = require('../../controllers/talk_to_expert_controller/talk_to_expert.js');
const stripe = require('stripe')('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');
// const { token } = await stripe.createToken({ name: 'Test User' });



router.post('/register', register_user)
router.post('/login', login_user)
router.post('/reset-password-req', reset_user_password_request)
router.post('/reset-password-otp-verify', verify_reset_password_OTP)
router.post('/reset-password-create', verify_OTP_and_create_password)

router.post('/save-customerimage-path', save_image1)
router.post('/upload-files', upload_image_contoller)
// upload-files

// create user profile 
router.post('/create-customer', create_customer)


router.post('/login-customer', login_customer)
router.post('/create-customer-job', create_customer_job)

router.post('/get-customer-job-by-id', get_createed_job_by_user_id)

router.get('/get-customer-profile/:id', get_customer_profile_by_id)

router.post('/create-vendor', create_vendor)
router.post('/save-image-path', save_image)

router.post('/login-vendor', login_vendor)
router.get('/get-all-customer', get_all_customers)
router.post('/create-vendor-gig', create_vendor_gig)

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
router.post('/', createPayments);

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
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
    });

    res.json({ clientSecret: paymentIntent.client_secret });
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