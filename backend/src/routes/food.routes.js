const express = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const foodController = require("../controllers/food.controller")
const router = express.Router()
const multer = require("multer")

const upload = multer({
  storage: multer.memoryStorage()
})


/**
 * post /api/food - Protected
 */
router.post("/", authMiddleware.foodPartnerMiddleware, upload.single("video"), foodController.createFood)

// make sure the name video matches with the video keyword when provided from frontend

/**
 * GET /api/food - Protected
 */
router.get("/",authMiddleware.userMiddleware,foodController.getFoodItems)

module.exports = router