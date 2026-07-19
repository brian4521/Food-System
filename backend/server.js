const app = require("./src/app")
const connectMongoDb = require("./src/db/db")

connectMongoDb()
app.listen(3000,()=>{
  console.log("server is running ")
})