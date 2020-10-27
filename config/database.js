const mongoose = require('mongoose');

//* mongoose config
const connectDatabase = () => {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/weSkool', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  //* mongo setup
  // const mongodb = mongoose.connection;
  // // eslint-disable-next-line no-console
  // mongodb.on('error', console.error.bind(console, 'connection error:'));
  // // eslint-disable-next-line no-console
  // mongodb.once('open', () => console.log('Connected to database.'));
};

module.exports = connectDatabase;
