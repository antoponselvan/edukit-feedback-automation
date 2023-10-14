const express = require("express")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get("/test",(req,res)=>{
    res.send("Hello Edukiters!")
})
app.listen(PORT,()=>{
    console.log("Server started!")
})

