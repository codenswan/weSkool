const router = require("express").Router();
const bookRoutes = require("./books");
const studentRoutes = require('./students');
const activityRoutes = require('./activity');
const gRoutes = require('./googleAPI')

//* Book routes
router.use("/books", bookRoutes);
router.use("/students", studentRoutes);
router.use('/activities', activityRoutes)
router.use("/searchbooks", gRoutes);

module.exports = router;