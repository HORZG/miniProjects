const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
subject : String,
duration : String,
price : String,
lvl : String,
teacher : String,
idTeacher :String,
date : String,
placesLeft : Number,



})

const course = mongoose.model('Course', courseSchema);

module.exports= course;