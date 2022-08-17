const mongoose = require('mongoose')

const bookedCoursesSchema = mongoose.Schema({
idStudent : String,
idCourse : String,
idTeacher : String,
subject : String,
date : String,
price : String,
Lvl : String,
statut : String


})

const bookedCourse = mongoose.model('BookedCourse', bookedCoursesSchema);

module.exports = bookedCourse ;