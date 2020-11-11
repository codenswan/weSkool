const router = require("express").Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/students/image' })
 

const activityController = require("../../controllers/activitiesController");

//* Matches with "/api/activity"
router.route("/")
  .get(activityController.findAll)
  //.post(activityController.create);
  
router
  .post('/', upload.single('photos'), activityController.create);

//* Matches with "/api/activity/:id"
// router.route("/:id")
//   .get(students.findById)
//   .put(students.update)
//   .delete(students.remove);

module.exports = router;
