const Book = require('../models/Books');

module.exports = {
  create: async (req, res) => {
    try {
      const dbModel = await Book.create(req.body);
      res.status(201).json(dbModel);
    } catch (error) {
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