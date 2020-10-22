const Student = require('../models/Student');

module.exports = {
  create: async (req, res) => {
    try {
      const newStudent = await Student.create(req.body);
      res.status(201).json(newStudent);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  findAll: async (req, res) => {
try {
  const studentData = await Student.find({});
  res.status(201).json(studentData);
} catch (error) {
  res.status(422).json(error);
}
  },
  findById: async (req, res) => {
    try {
      const data = await Student.findById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(422).json(error);
    }
  },
};
