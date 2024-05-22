const nodemailer = require("nodemailer");
require("dotenv").config();

const { TRANSPORT_HOST, TRANSPORT_PORT, TRANSPORT_SERVICE } = process.env


const transportEmail =

    nodemailer.createTransport({

        // host: TRANSPORT_HOST,
        // port: TRANSPORT_PORT,
        // secure: true,
        // service: TRANSPORT_SERVICE,
        // auth: {
        //     user: 'ibrar011@gmail.com',
        //     pass: 'npgzffilvgvdnksm'
        // }
        host: "smtp.mailgun.org",
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });



async function send_OTP_email(email, OTP) {


    await transportEmail.sendMail({
        from: "brad@mg.honesthomehub.com  📧 Honest Home Hub",
        to: email,
        subject: "Email Verification OTP",
        html: `<div><h3>Welcome to Dylan</h3>
        <p>Please use the following code to verify your email:</p>
        <h1 style="letter-spacing:12px"><b>${OTP}</b></h1></div>`,

    });


}
async function send_partner_email(email, password) {


    await transportEmail.sendMail({
        from: "brad@mg.honesthomehub.com 📧 Honest Home Hub",
        to: email,
        subject: "PARTNER INVITATION",
        html: `<div><h3>Welcome to Seller partner dashboard.</h3>
        <p>Please use these credentials for Partner dashboard login.</p>
        <h5><b>Email: ${email}</b></h5></div,
        <h5><b>PAssword:  ${password}</b></h5></div>`,

    });


}

async function reset_password_email(email, OTP) {



    await transportEmail.sendMail({
        from: "brad@mg.honesthomehub.com 📧 Honest Home Hub",
        to: email,
        subject: "Reset Password",
        html: `<div>
        <p>Enter the following OTP to reset your password</p>
        <h1 style="letter-spacing:12px"><b>${OTP}</b></h1></div>`,

    });


}

module.exports = { send_OTP_email, reset_password_email, send_partner_email }