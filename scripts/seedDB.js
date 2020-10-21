const mongoose = require('mongoose');
const Student = require('../models/Student');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/weSkool');

const studentsSeed = [
  {
    name: 'Abi',
    grade: '7',
    age: 13,
  },
  {
    name: 'Elliot',
    grade: '5',
    age: 10,
  },
  {
    name: 'Corban',
    grade: '2',
    age: 8,
  },
  {
    name: 'Ezra',
    grade: 'K',
    age: 5,
  },
];

Student.remove({})
  .then(() => Student.collection.insertMany(studentsSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
