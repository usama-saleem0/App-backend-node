const { Customer_Schema } = require("../../models/customer_model");
const Req_Session = require("../../models/req_session_model");

const talk_to_expert = async (req, res) => {
    const { body } = req;
    console.log(body,"expertbodyy")
    try {
        const req_Session = await Req_Session.create({ ...body })
        return res.status(200).send({ message: "Session created successfully", success: true })
    } catch (error) {
        console.log("err", error);
    }
}
const get_session_by_id = async (req, res) => {
    const { body } = req;
    try {
        const req_Session = await Req_Session.create({ ...body })
        return res.status(200).send({ message: "Session created successfully", success: true })
    } catch (error) {
        console.log("err", error);
    }
}





const email_Ross = async(req,res)=>{

    try {
        // Extract email details from request body
        const { body } = req;

        const {
            result1,
            result2,
            result3,
            result4,
            finalresult,
            introvertCounts,
            extrovertCounts,
            intuitorCounts,
            thinkerCounts,
            feelerCounts,
            judgerCounts,
            perciverCounts,
            sensorCounts,
            name,
            email,
        } = body;

        console.log(req.body);

        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: `${email}`,
            from: 'Well-BeingHub@gmail.com',
            subject: 'Personality Result',
            text: 'HI',
            html: `<!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Personality Test Results</title>
                </head>
                
                <body>
                
                    <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 18px; max-width: 750px;">
                        <thead>
                            <tr>
                                <th
                                    style="border: 1px solid #000; text-align: center; padding: 8px; height: 40px; width: 25%; background-color: #a62591; color: #fff;">
                                    Introvert</th>
                                <th
                                    style="border: 1px solid #000; text-align: center; padding: 8px; height: 40px; width: 25%; background-color: #a62591; color: #fff;">
                                    Extrovert</th>
                                <th style="
                        border: 1px solid #000;
                        text-align: center;
                        padding: 8px;
                        height: 40px;
                        width: 25%;
                        background-color: #a62591;
                        color: #fff;
                    "></th>
                                <th
                                    style="border: 1px solid #000; text-align: center; padding: 8px; height: 40px; width: 25%; background-color: #a62591; color: #fff;">
                                    Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${introvertCounts}</td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${extrovertCounts}</td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${result1}</td>
                            </tr>
                            <tr>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;color: #fff;">
                                    Sensor</td>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;color: #fff;">
                                    Intuitor</td>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;">
                                </td>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;color: #fff;">
                                    Result</td>
                            </tr>
                            <tr>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${sensorCounts}</td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${intuitorCounts}</td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${result2}</td>
                            </tr>
                            <tr>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;color: #fff;">
                                    Thinker</td>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;color: #fff;">
                                    Feeler</td>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;">
                                </td>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;color: #fff;">
                                    Result</td>
                            </tr>
                            <tr>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${thinkerCounts}</td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${feelerCounts}</td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${result3}</td>
                            </tr>
                            <tr>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;color: #fff;">
                                    Judger</td>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;color: #fff;">
                                    Perceiver</td>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;">
                                </td>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;color: #fff;">
                                    Result</td>
                            </tr>
                            <tr>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${judgerCounts}</td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${perciverCounts}</td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                    ${result4}</td>
                            </tr>
                
                            <tr>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf;">
                                </td>
                            </tr>
                            <tr>
                                <td style=""></td>
                                <td style=""></td>
                                <td style=""></td>
                                <td
                                    style="border: 1px solid #000;text-align: center;padding: 8px;height: 40px;width: 25%;background: #a62591;color: #fff;">
                                    Total
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center;padding: 8px;height: 40px;width: 25%;"></td>
                                <td style="text-align: center;padding: 8px;height: 40px;width: 25%;"></td>
                                <td style=""></td>
                                <td
                                    style="border: 1px solid #000; text-align: center; padding: 8px;height: 40px; width: 25%;     background: #dfdfdf; text-transform: uppercase;">
                                    ${finalresult}</td>
                            </tr>
                
                        </tbody>
                    </table>
                
                
                
                </body>
                
                </html>`
            ,
        };

        await sgMail.send(msg);
        console.log('Email sent');

        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while sending the email' });
    }
}




module.exports = { talk_to_expert, get_session_by_id ,email_Ross}





