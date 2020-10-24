const router = require("express").Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
 

const activity = require("../../controllers/activitiesController");

//* Matches with "/api/activity"
router.route("/")
  .get(activity.findAll)
  //.post(activity.create);
  
router
  .post('/', upload.single('photos'), activity.create);

//* Matches with "/api/activity/:id"
// router.route("/:id")
//   .get(students.findById)
//   .put(students.update)
//   .delete(students.remove);

module.exports = router;
