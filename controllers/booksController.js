const BookModel = require('../models/BookModel');
const StudentModel = require('../models/StudentModel');

module.exports = {
  create: async (req, res) => {
    try {
      //* separate student_id and the book details so that
      const { student_id, ...bookDetails } = req.body
      //* book gets saved
      const newBook = await BookModel.create(bookDetails);
      //* to the right student
      const student = await StudentModel.findById(student_id);
      student.saveBook(newBook);
      
      res.status(201).json(newBook);
    } catch (error) {
      console.log(error)
      res.status(422).json(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const books = await BookModel.find({});
      res.status(200).json(books);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  remove: async (req, res) => {
    try {
      const data = await BookModel.findById({ _id: req.params.id });
      data.remove();
      res.status(200).json(data);
    } catch (error) {
      res.status(422).json(error);
    }
  }
};