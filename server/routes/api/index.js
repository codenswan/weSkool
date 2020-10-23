const router = require("express").Router();
const bookRoutes = require("./books");
const studentRoutes = require('./students');
const gRoutes = require('./googleAPI')

//* Book routes
router.use("/books", bookRoutes);
router.use("/students", studentRoutes);
router.use("/searchbooks", gRoutes);

module.exports = router;