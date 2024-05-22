const Auth_Token_DTO = require("../../dto/auth_tokens_dto")
const User_DTO = require("../../dto/user_dto")
const { Customer_Job_Schema } = require("../../models/customer_job_model")
const { Customer_Schema } = require("../../models/customer_model")
const { Create_admin_dylan } = require("../../models/dylan_admin_model")
const Reviews = require("../../models/review_model")
const Schedule = require("../../models/schedule.model")
const Payment = require("../../models/stripe_model")
const { User_Tokens_Schema } = require("../../models/user_tokens_model")
const { Vendor_Gig_Schema } = require("../../models/vendor_gig_model")
const { Vendor_Schema } = require("../../models/vendor_model")
const { Bcrypt_Service } = require("../../services/bcrypt_services")
const { JOI_Validations } = require("../../services/joi_services")
const { JWT_Generate_Token_Handle } = require("../../services/jwt_services")







const get_all_jobs = async(req,res,next)=>{

    try{

        const Customer_jobs = await Customer_Job_Schema.find({})
        const Jobs_Count = Customer_jobs.length;

        if(Customer_jobs)
        {

            res.json({

                Jobs:Customer_jobs,
                Jobs_Count:Jobs_Count,
                message:true


            })


        }
    }
        
    

    catch(error){

        res.json(error)
    }




}





const get_all_vendors = async(req,res,next)=>{

    try{

        const All_Vendors = await Vendor_Schema.find({})
        const Vendors_Count = All_Vendors.length;

        if(All_Vendors)
        {

            res.json({

                Vendors:All_Vendors,
                message:true,
                Vendors_Count:Vendors_Count


            })


        }
    }
        
    

    catch(error){

        res.json(error)
    }




}



const get_all_customers_admin = async(req,res,next)=>{

    try{

        const All_Customers = await Customer_Schema.find({})
        const Customer_Count = All_Customers.length;

        if(All_Customers)
        {

            res.json({

                Customers:All_Customers,
                Customer_Count:Customer_Count,
                message:true


            })


        }
    }
        
    

    catch(error){

        res.json(error)
    }




}




const get_all_schedules_admin = async(req,res,next)=>{

    try{

        const All_Schedules = await Schedule.find({})

        if(All_Schedules)
        {

            res.json({

                Schedules:All_Schedules,
                message:true


            })


        }
    }
        
    

    catch(error){

        res.json(error)
    }




}



const get_all_reviews_admin = async(req,res,next)=>{

    try{

        const All_reviews = await Reviews.find({})

        let cost = 0

        All_reviews.forEach(element => {
            
            console.log(element.cost,"COST")

            cost= cost + parseInt(element.cost)



        });


        console.log("Total_Cost",cost)


        if(All_reviews)
        {

            res.json({

                Reviews:All_reviews,
                cost:cost,
                message:true


            })


        }
    }
        
    

    catch(error){

        res.json(error)
    }




}


const get_all_payments_admin = async(req,res,next)=>{

    try{

        const All_payments = await Payment.find({})

        if(All_payments)
        {

            res.json({

                Payments:All_payments,
                message:true


            })


        }
    }
        
    

    catch(error){

        res.json(error)
    }




}



const Customer_Vendor_Job_Details = async (req, res, next) => {
    const { id } = req.params;

    console.log(id,"Customer_Vendor")
    try {
        const resultVariable = await Customer_Job_Schema.findById(id)

        const Vendor_Selected = await Schedule.find({jobId:id})

            console.log(Vendor_Selected,"Vendor_Selected")

            const CustomerID= resultVariable.user_id.toString()
            
            const selectedObjects = Vendor_Selected.filter(obj => obj.status === "selected");

                console.log(selectedObjects,"Selected Objects")


            const selected_job_vendor= selectedObjects.map(obj=>obj.vendorId)

            

            const Vendor_ID_Selected = selected_job_vendor.toString()

            console.log(Vendor_ID_Selected,"Selected_Job_Vendor_ID")



            const get_selected_vendor_profile = await Vendor_Schema.findById(Vendor_ID_Selected)

            console.log(get_selected_vendor_profile,"selected_vendor_profile")


            // const get_selected_vendor_job_profile= await Vendor_Gig_Schema.findOne({vender_id:Vendor_ID_Selected})

            //     console.log(get_selected_vendor_job_profile,"get_selected_vendor_job_profile")


              const customer_details= await Customer_Schema.findById(CustomerID)  
                console.log(customer_details,CustomerID,"Customer_Details")


                const Job_Review = await Reviews.findOne({JobId:id})

                console.log("Review",Job_Review)







        return res.json({
            message: "Get Successfully",
            data: resultVariable,
            Vendor_Selected:Vendor_Selected,
            selected_job_vendor:selected_job_vendor,
            get_selected_vendor_profile:get_selected_vendor_profile,
            customer_details:customer_details,
            Job_Review:Job_Review,
            selectedObjects:selectedObjects




         
        });
    } catch (error) {
        return next(error);
    }
}



// const Customer_Vendor_Job_Details = async (req, res, next) => {
//     const { id } = req.params;

//     console.log(id,"Customer_Vendor")
//     try {
//         const resultVariable = await Customer_Job_Schema.findById(id);

//         if (!resultVariable) {
//             return res.status(404).json({ message: "Job not found" });
//         }

//         const Vendor_Selected = await Schedule.find({ jobId: id });

//         console.log(Vendor_Selected, "Vendor_Selected");

//         const CustomerID = resultVariable.user_id.toString();
//         const selectedObjects = Vendor_Selected.filter(obj => obj.status === "selected");

//         console.log(selectedObjects, "Selected Objects");

//         const selected_job_vendor = selectedObjects.map(obj => obj.vendorId);

//         const Vendor_ID_Selected = selected_job_vendor.toString();

//         console.log(Vendor_ID_Selected, "Selected_Job_Vendor_ID");

//         let get_selected_vendor_profile = null;
//         if (Vendor_ID_Selected) {
//             get_selected_vendor_profile = await Vendor_Schema.findById(Vendor_ID_Selected);
//             console.log(get_selected_vendor_profile, "selected_vendor_profile");
//         }

//         let customer_details = null;
//         if (CustomerID) {
//             customer_details = await Customer_Schema.findById(CustomerID);
//             console.log(customer_details, CustomerID, "Customer_Details");
//         }

//         const Job_Review = await Reviews.findOne({ JobId: id });

//         console.log("Review", Job_Review);

//         return res.json({
//             message: "Get Successfully",
//             data: resultVariable,
//             Vendor_Selected: Vendor_Selected,
//             selected_job_vendor: selected_job_vendor,
//             get_selected_vendor_profile: get_selected_vendor_profile,
//             customer_details: customer_details,
//             Job_Review: Job_Review,
//             selectedObjects: selectedObjects
//         });
//     } catch (error) {
//         console.error(error); // Log the error for debugging
//         return res.status(500).json({ message: "Internal server error" }); // Send a generic error response
//     }
// }



    const get_vendor_profile_admin = async (req,res,next)=>{

        const {id} = req.params

        console.log(id,"Vendor Id")

        try {

            const Vendor_Profile = await Vendor_Gig_Schema.findOne({vender_id:id})

            const Vendor_Bio = await Vendor_Schema.findById(id)



            if(Vendor_Bio){

                console.log(Vendor_Profile,"Vendor_Profile")

                res.json(
                    {

                    Vendor_Profile:Vendor_Profile,
                    Vendor_Bio:Vendor_Bio
                    }
                )   

                

            }

        }

        catch (error){

            res.json({

                Vendor_Bio:error


            })

        }



        


    }





    const get_customer_profile_data = async (req,res,next)=>{

            const {id} = req.params

            console.log(id,"Customer_id")

            try {

                const Customer_Bio = await Customer_Schema.findById(id)

                const Customer_Jobs = await Customer_Job_Schema.find({user_id:id})
    
                if(Customer_Bio){

                        console.log(Customer_Bio,"Customer_Bio")

                        console.log(Customer_Jobs,"Customer_JOBS")


                     const completed_jobs =   Customer_Jobs.filter(phase=> phase.phase === "Order Completed")

                     console.log(completed_jobs.length,"CompletedJOBS",Customer_Jobs.length)

                     const Active_Jobs= Customer_Jobs.length
                     const Completed_Jobs=  completed_jobs.length



                    res.json(

                        {
                            Completed_Jobs:Completed_Jobs,
                            Active_Jobs:Active_Jobs,
                            Customer_Jobs:Customer_Jobs,
                            Customer_Bio:Customer_Bio


                        }
                    )



                }
            }


            catch (error) {

                    res.json({


                        Customer_Bio:error
                    })

            }





    }


    const requiredFields = [
        
    
        // TS work
        // 'Profile_Image',
    
        // 
        'Name',
        'email',
        'password'
     
    ];



    const create_dylan = async (req, res, next) => {

        const { body } = req;
        try {
            const {
             
                Name,
                email,
                password,
    
               
    
            } = body;
    
            const missingFields = requiredFields.filter(field => !(field in body));
    
            if (missingFields.length > 0) {
                return res.status(400).json({
                    error: `Missing required fields: ${missingFields.join(', ')}`
                });
            }
            const secure_password = await Bcrypt_Service.bcrypt_hash_password(password);
    
            const store_user_data = {
                
                Name,
               
                email,
                password: secure_password,
               
               
    
            };
    
            const save_user = await Create_admin_dylan.create({
                ...store_user_data,
            });
    
            const user_dto = new User_DTO(save_user);
    
            const generate_tokens = await JWT_Generate_Token_Handle.save_user_tokens(
                user_dto._id
            );
    
            const save_tokens = await User_Tokens_Schema.create({
                ...generate_tokens,
                user_id: user_dto._id,
            });
    
    
    
    
            const tokens_dto = new Auth_Token_DTO(save_tokens);
    
            const send_data = {
                email,
                Name: Name,
                email: email,
                // Profile_Image: Profile_Image,
                user_id: user_dto._id,
    
            };
    
    
    
            return res.json({
                message: "Registered Successfully",
                data: send_data,
                tokens: tokens_dto,
            });
        } catch (error) {
            return next(error);
        }
    }



    
const login_dylan = async (req, res, next) => {
    const { body } = req;
    try {
        const { email, password } = body;
        // 2. if error in validation -> return error via middleware
        const validation_error = JOI_Validations.user_login_joi_validation(body);
        if (validation_error) {
            return next(validation_error);
        }
        const find_user = await Create_admin_dylan.findOne({ email });
        if (!find_user) {
            const error = {
                status: 401,
                message: "Invalid credentials!",
            };
            return next(error);
        }


        const compare_password = await Bcrypt_Service.bcrypt_compare_password(
            password,
            find_user.password
        );

        if (!compare_password) {
            const error = {
                status: 401,
                message: "Invalid credentials!",
            };
            return next(error);
        }

        const user_dto = new User_DTO(find_user);

        const generate_tokens = await JWT_Generate_Token_Handle.save_user_tokens(
            user_dto._id
        );

        const save_tokens = await User_Tokens_Schema.create({
            ...generate_tokens,
            user_id: user_dto._id,

        });
        const obj = {
            Name: find_user.Name,
            email: find_user.email,
            selected_queries: find_user.selected_queries,
            Profile_Image: find_user.Profile_Image,
            user_id: user_dto._id,

        };

        const tokens_dto = new Auth_Token_DTO(save_tokens);

        return res.json({
            message: "logged in successfully!",
            data: obj,
            tokens: tokens_dto,
        });
    } catch (error) {
        return next(error);
    }
}












module.exports={get_all_jobs,get_all_vendors,get_all_customers_admin,get_all_schedules_admin,get_all_reviews_admin,get_all_payments_admin,Customer_Vendor_Job_Details,get_vendor_profile_admin,get_customer_profile_data,create_dylan,login_dylan}