const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const mongoose = require('mongoose');
const path = require('path');

//* middleware
const app = express();
app.use([
  express.urlencoded({ extended: true }),
  express.json(),
  compression(),
  logger('dev'),
]);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//* mongoose config
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/weSkool', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//* mongo setup
const mongodb = mongoose.connection;
// eslint-disable-next-line no-console
mongodb.on('error', console.error.bind(console, 'connection error:'));
// eslint-disable-next-line no-console
mongodb.once('open', () => console.log('Connected to database.'));

// Link API Routes here
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

//* port config
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    '🚀  Server server now on port',
    PORT,
    '👻 React App on Port 3000'
  );
});
