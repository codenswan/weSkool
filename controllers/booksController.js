const Book = require('../models/Book');
const Student = require('../models/Student');

module.exports = {
  create: async (req, res) => {
    try {
      const {student_id, ...bookDetails} = req.body
      const newBook = await Book.create(bookDetails);
      console.log(newBook)
      const student = await Student.findById(student_id);
      student.saveBook(newBook);
      
      res.status(201).json(newBook);
    } catch (error) {
      console.log(error)
      res.status(422).json(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const dbModel = await Book.find({});
      res.status(200).json(dbModel);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  remove: async (req, res) => {
    try {
      const dbModel = await Book.findById({ _id: req.params.id });
      dbModel.remove();
      res.status(200).json(dbModel);
    } catch (error) {
      res.status(422).json(error);
    }
  }
};