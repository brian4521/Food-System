const foodModel = require("../models/food.model")
const foodPartnerModel = require("../models/foodpartner.model")

async function getFoodPartnerById(req,res){

  const foodPartnerId = req.params.id

  const foodPartner = await foodPartnerModel.findById(foodPartnerId)

  if(!foodPartner){
    return res.status(400).json({
      message:"food partner not found"
    })
  }

  res.status(200).json({
    message:"Food partner found",
    foodPartner
  })




}

module.exports = {
  getFoodPartnerById
}