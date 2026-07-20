const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config() 

function connectMongoDb(){
  mongoose.connect(process.env.MONGODB_URI)
  .then(()=>{
    console.log("connected to mongoDB")
  })
  .catch((err)=>{
    console.log("error occured while connecting to mongodb",err)
  })
}

module.exports = connectMongoDb