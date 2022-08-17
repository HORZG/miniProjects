const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema ({
firstName : String,
lastName : String,
age :String,
subject :String,
career :String

})
 
const teacher = mongoose.model('Teacher', teacherSchema);

module.exports = teacher;