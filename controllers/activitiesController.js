const Activity = require('../models/Activity');
const Student = require('../models/Student');

module.exports = {
    create: async (req, res) => {
        try {
            const {student_id, ...activityDetails} = req.body
            const newActivity = await Activity.create(activityDetails);
            console.log(newActivity)
            const student = await Student.findById(student_id);
            student.saveActivity(newActivity);
            
            res.status(201).json(newActivity);
          } catch (error) {
            console.log(error)
            res.status(422).json(error);
          }
    },
    findById: async (req, res) => {
        try {
            const data = await Activity.findById(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    findAll: async (req, res) => {
        try {
            const data = await Activity.find({});
            res.status(200).json(data);
        } catch (error) {
            res.status(422).json(error);
        }
    },
}