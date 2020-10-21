const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  grade: { type: String, required: true, },
  age: { type: Number, required: true, },
  photo: { type: String, },
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Activity',
    },
  ],
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
