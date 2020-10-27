const bookRoutes = require('./books');
const studentRoutes = require('./students');
const activityRoutes = require('./activity');
const gRoutes = require('./googleAPI');
const userRoutes = require('./user')
const AuthenticatedMiddleware= require('../../middleware/AuthenticatedMiddleware')
const auth = require('../api/auth/auth')

const router = require('express').Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//* Book routes
router.use(auth);

router.use(AuthenticatedMiddleware)

router.use('/books', bookRoutes);
router.use('/students', studentRoutes);
router.use('/activities', activityRoutes);
router.use('/searchbooks', gRoutes);
router.use('/users', userRoutes);


module.exports = router;
