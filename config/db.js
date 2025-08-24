import mongoose from 'mongoose'

export const dbConnect = async ()=>{
   const connect =  await mongoose.connect("mongodb+srv://manjityadav9986:BYkgs67j8Xp7lpX6@cluster1.dsdlm18.mongodb.net/portfolio")

   if(connect) {
      console.log("Database connected successfully")
   }
}