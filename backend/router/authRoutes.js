const express = require('express')
const router = express.Router()
const path = require("path")
router.route("/").get((req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","..","frontend","index.html"))
})
router.route("/login").get((req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","..","frontend","index.html"))
})
router.route("/signUp").get((req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","..","frontend","index.html"))
})

module.exports = router