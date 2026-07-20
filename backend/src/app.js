const express = require("express")
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/auth.routes")
const foodRoute = require("./routes/food.routes")
const app = express()

app.use(cookieParser())
app.use(express.json())

app.get("/",(req,res)=>{
  res.send("hello bro..")
})

app.use("/api/auth",authRoute)
app.use("/api/food",foodRoute)



module.exports = app