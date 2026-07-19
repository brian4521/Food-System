const mongoose = require("mongoose")

function connectMongoDb(){
  mongoose.connect("mongodb://localhost:27017/food-delivery")
  .then(()=>{
    console.log("connected to mongoDB")
  })
  .catch((err)=>{
    console.log("error occured while connecting to mongodb",err)
  })
}

module.exports = connectMongoDb