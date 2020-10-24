const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: { type: String },
}, {timestamps: true}
);

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;
