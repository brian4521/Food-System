const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const foodController = require("../controllers/food.controller")

const router = express.Router()


//
router("/", authMiddleware.foodPartnerMiddleware,foodController.foodItem)

module.exports = router