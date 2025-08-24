import mongoose from 'mongoose'

export const dbConnect = async ()=>{
   const connect =  await mongoose.connect("mongodb://localhost:27017/portfolio")
   if(connect) {
      console.log("Database connected successfully")
   }
}