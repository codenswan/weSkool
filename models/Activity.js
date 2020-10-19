const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    title: String,
    subject: String,
    description: String
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;