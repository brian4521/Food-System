const express = require("express")

const foodPartnerController = require("../controllers/foodPartner.controller")
const authMiddleware = require("../middleware/auth.middleware")

const router = express.Router()

/**
 * get /api/food-partner/:id
 */
router.get("/:id",authMiddleware.userMiddleware,foodPartnerController.getFoodPartnerById)


module.exports = router