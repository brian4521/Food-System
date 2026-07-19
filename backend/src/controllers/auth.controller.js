const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")

async function registerUser(req,res){

  const {fullName,email,password} = req.body

  const isUserAlreadyExist = await userModel.findOne({email})

  if(isUserAlreadyExist){
    return res.status(400).json({
      message:"user already exist with this email"
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await userModel.create({
    fullName, email, password:hashedPassword
  })



}

module.exports = registerUser