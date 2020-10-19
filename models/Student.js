const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentsSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    activities: {
        type: Schema.Types.ObjectId,
        ref: "Activities"
    }

})

const Student = mongoose.model("Student", StudentsSchema)

module.exports = Student;