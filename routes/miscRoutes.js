const {loginUser, getUserDetails} = require("../controllers/miscController")
const {protect} = require("../middleware/protect")
const express = require("express")

const miscRouter = express.Router()

miscRouter.post('/login', loginUser)
miscRouter.get('/profile', protect, getUserDetails)

module.exports = {miscRouter}