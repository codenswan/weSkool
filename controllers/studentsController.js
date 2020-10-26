const StudentModel = require('../models/Student');

module.exports = {
  create: async (req, res) => {
    try {
      const newStudent = await StudentModel.create(req.body);
      res.status(201).json(newStudent);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const students = await StudentModel.find({});
      res.status(201).json(students);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  findById: async (req, res) => {
    try {
      const student = await StudentModel.findById(req.params.id);
      res.status(200).json(student);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  // getAllActivity: async (req, res) => {
  //   let studentActivities = await StudentModel.findById(req.params.id).populate(
  //     'activities'
  //   );
  //   res.json(studentActivities);
  // },
};
