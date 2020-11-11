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


//* Matches with "/api/students/books/:id"
router.route('/books/:id')
.get(studentsController.getAllBooks)

// const Student = require("./../../models/StudentModel")
// router.get('/playground/:id', async (req, res) => {
//   const student = await Student.findOne({ _id: req.params.id })
//   await student.populate('activities').execPopulate();
//   res.json(student)

// })

//* Matches with "/api/students/activities/:id"
router.route('/activities/:id').get(studentsController.getAllActivities);
// .get(studentController.getAllActivity)
//   .put(students.update)
//   .delete(students.remove);

module.exports = router;
