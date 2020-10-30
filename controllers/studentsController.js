const StudentModel = require('../models/StudentModel');

module.exports = {
  create: async (req, res) => {
    try {
      console.log(req.body);
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
  getAllBooks: async (req, res) => {
    try {
      const studentBooks = await StudentModel.findById(req.params.id).populate(
        'books'
      );
      res.status(200).json(studentBooks);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  getAllActivities: async (req, res) => {
    try {
      let studentActivities = await StudentModel.findOne({ _id: req.params.id })
      await studentActivities.populate('activities').execPopulate();
      res.status(200).json(studentActivities);
    } catch (error) {
      res.status(422).json(error);
    }
  },
};
