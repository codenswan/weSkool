const ActivityModel = require('../models/ActivityModel');
const StudentModel = require('../models/StudentModel');

module.exports = {
    create: async (req, res) => {
        console.log(req.file, req.body)
        try {
            const {student_id, ...activityDetails} = req.body
            const newActivity = await ActivityModel.create({ ...activityDetails , photo: req.file.path});
    
            const student = await StudentModel.findById(student_id);
            student.saveActivity(newActivity);
            
            res.status(201).json(newActivity);
          } catch (error) {
            console.log(error)
            res.status(422).json(error);
          }
    },
    findById: async (req, res) => {
        try {
            const data = await ActivityModel.findById(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(422).json(error);
        }
    },
    findAll: async (req, res) => {
        try {
            const data = await ActivityModel.find({});
            res.status(200).json(data);
        } catch (error) {
            res.status(422).json(error);
        }
    },
}