const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require('express-session');
const MongoStore = require("connect-mongo")(session);
const dotenv = require('dotenv')

const connectDatabase = require("./config/database");
const routes = require('./routes');

//* middleware
connectDatabase();
dotenv.config({ path: ".env" });

const app = express();
app.use(express.static('uploads'))
app.use([
  express.urlencoded({ extended: true }),
  express.json(),
  compression(),
  logger('dev'),
  cookieParser(process.env.SESSION_SECRET),

]);

app.use(
  session({
      resave: true,
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET,
      cookie: {
          secure: false, // not using https
          maxAge: 1209600000,
      }, // two weeks in milliseconds
      store: new MongoStore({
          url: process.env.MONGODB_URI ||'mongodb://localhost/weSkool',
          autoReconnect: true,
      }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//* Link API Routes here
app.use(routes);

//* port config
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    '🚀  Server server now on port',
    PORT,
    '👻 React App on Port 3000'
  );
});
