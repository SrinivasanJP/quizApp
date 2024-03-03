const express = require("express")
const app = express()
const authRoutes = require("./router/authRoutes")

app.use("/",authRoutes)

app.listen(8000,()=>{
    console.log("app listening to port 8000")
})