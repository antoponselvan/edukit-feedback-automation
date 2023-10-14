const express = require("express")
const tutorRouter = express.Router()

const {getTutorSummary, getTutorFeedbackOnTutee, editTutorGeneralFeedback, addTutorSessionFeedback, editTutorSessionFeedback} = require("../controllers/tutorController")
const {protect} = require("../middleware/protect")

tutorRouter.get('/summary',protect, getTutorSummary)
tutorRouter.get('/tuteeFeedback', protect, getTutorFeedbackOnTutee)
tutorRouter.post('/tuteeGeneralFeedback', protect, editTutorGeneralFeedback)
tutorRouter.post('/tuteeSessionFeedback/add',protect, addTutorSessionFeedback)
tutorRouter.post('/tuteeSessionFeedback/edit', protect, editTutorSessionFeedback)

module.exports = {tutorRouter}
