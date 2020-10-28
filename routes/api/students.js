const router = require('express').Router();
const studentsController = require('../../controllers/studentsController');

//* Matches with "/api/students"
router
  .route('/')
  .get(studentsController.findAll)
  .post(studentsController.create);

//* Matches with "/api/students/:id"
router
  .route('/:id')
  .get(studentsController.findById)
  .get(studentsController.getAllBooks)
  .get(studentsController.getAllActivities);

//* Matches with "/api/students/books/:id"
router.route('/books/:id');

//* Matches with "/api/students/activities/:id"
router.route('/activities/:id').get(studentsController.getAllBooks);
// .get(studentController.getAllActivity)
//   .put(students.update)
//   .delete(students.remove);

module.exports = router;
