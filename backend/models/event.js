const mongoose = require('mongoose') ; 

const eventSchema = mongoose.Schema({
    title : String,
    date : String,
    description : String,
    price : String,
    image : String

})

const event = mongoose.model('Event', eventSchema);

module.exports = event;