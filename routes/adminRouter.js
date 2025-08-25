
import express from 'express';
import {contactModel, projectModel} from '../model/table.js'

const adminRouter = express.Router();

adminRouter.post('/contact', async (req, res) => {
try{


    const {name, email,number,message} = req.body
    const data = new contactModel({name,email,number,message});
      
   const result =  await data.save();
     console.log(result,)
    res.json({
        code:200,
        message: "Contact added successfully. You will be responded to soon.", 
        data: result
    })

}
    catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error.",
            data: ''
        })
    }

})


adminRouter.post('/add-project', async (req, res) => {
try{


    const {title, description,view,github} = req.body
 

            const { pic } = req.files;
        pic.mv("uploads/" + pic?.name, (err) => {
            if (err) {
                res.json({
                    code: 400,
                    message: "err.message",
                    data: ''
                })
            }
        })

           const data = new projectModel({title,description,view,github,pic:pic?.name});
      
   const result =  await data.save();
     console.log(result,)
    res.json({
        code:200,
        message: "Project added successfully.", 
        data: result
    })

}
    catch (err) {
        res.json({
            code: 500,
            message: err.message,
            data: ''
        })
    }

})

adminRouter.get("/project",async(req,res)=>{

   try{
            const response = await projectModel.find();

         
            
            if (response?.length > 0) {
            res.json({
                code: 200,
                message: "Property fetch Successfully..",
                data: [response]

            })

          
            
        }
        else {
            res.json({
                code: 400,
                message: "Data Not Found",
                data: []
            })
        }
   }
   catch(err){
      res.json({
            code: 500,
            message: err.message,
            data: ''
        })
   }
})

adminRouter.get('/contact-list', async (req, res) => {
    try {
        const result = await contactModel.find();
        if (result?.length > 0) {
            res.json({
                code: 200,
                message: "Data fetched successfully..",
                data: result
            })
        } else {
            res.json({
                code: 400,
                message: "Data Not Found.",
                data: []
            })
        }
    } catch (error) {
        res.json({
            code: 500,
            message: error.message,
            data: []
        })
    }
})

adminRouter.post('/delete-contact', async(req,res)=>{

  
    try {
        
          const {email} = req.body;
            const result = await contactModel.findOneAndDelete({email});
           
            
          if(result){
            res.json({
            code: 200,
            message: "Contact Deleted Successfully",
            data: ''
        })
          }
          else{
            res.json({
            code: 400,
            message: "contact Delete failed",
            data: ''
        })
          }
        }
    catch (err) {
        res.json({
            code: 500,
            message: "Internal Server Error.",
            data: ''
        })
    }

})




export default adminRouter;