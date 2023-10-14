const express = require("express")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT
const {miscRouter} = require("./routes/miscRoutes")
const {tutorRouter} = require("./routes/tutorRoutes")

app.use(express.json())
app.use("/api/misc", miscRouter)
app.use("/api/tutor",tutorRouter)

app.get("/test",(req,res)=>{
    res.send("Hello Edukiters!")
})
app.listen(PORT,()=>{
    console.log("Server started!")
})

