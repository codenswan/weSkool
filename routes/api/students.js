const router = require("express").Router();
const students = require("../../controllers/studentsController");

//* Matches with "/api/students"
router.route("/students")
  .get(students.findAll)
  .post(students.create);

//* Matches with "/api/students/:id"
// router.route("/students/:id")
//   .get(students.findById)
//   .put(students.update)
//   .delete(students.remove);

module.exports = router;
