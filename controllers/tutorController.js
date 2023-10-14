
const getTutorSummary = (req,res)=>{
    res.send("tutor Summary API")
}

const getTutorFeedbackOnTutee = (req,res)=>{
    res.send("tutor FB API")

}

const editTutorGeneralFeedback = (req,res) => {
    res.send("tutor Gen FB API")
}

const addTutorSessionFeedback = (req,res) => {
    res.send("tutor add session FB API")
}

const editTutorSessionFeedback = (req,res) => {
    res.send("tutor edit session API")
}

module.exports = {getTutorSummary, getTutorFeedbackOnTutee, editTutorGeneralFeedback, addTutorSessionFeedback, editTutorSessionFeedback}