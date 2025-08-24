import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    number:{type:Number},
    message:{type:String},
     createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
})


export const contactModel = mongoose.model("Contact", contactSchema);




const projectSchema = new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    view:{type:String},
    github:{type:String},
    pic:{type:String},
     createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
})


export const projectModel = mongoose.model("Project", projectSchema);