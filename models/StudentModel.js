const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  grade: { type: String, required: true },
  age: { type: Number, required: true },
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Activity',
    },
  ],
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book',
  }]
});
StudentSchema.methods.saveBook = function(book) {
  const bookID = book._id
  this.books.push(mongoose.Types.ObjectId(bookID))
  return this.save();
}

StudentSchema.methods.saveActivity = function(activity) {
  const activityID = activity._id
  this.activities.push(mongoose.Types.ObjectId(activityID))
  return this.save();
}

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
