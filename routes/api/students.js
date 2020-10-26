const router = require('express').Router();
const studentsController = require('../../controllers/studentsController');

//* Matches with "/api/students"
router.route('/')
  .get(studentsController.findAll)
  .post(studentsController.create);

//* Matches with "/api/students/:id"
router
  .route('/:id')
  // .get(studentController.getAllActivity)
  // .get(students.findById);
//   .put(students.update)
//   .delete(students.remove);

module.exports = router;
