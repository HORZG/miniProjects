const mongoose = require('mongoose');

const iEventSchema = mongoose.Schema ({
    title : String,
    date : String, 
    description : String,
    idUser : String
})

const iEvent = mongoose.model('iEvent', iEventSchema);

module.exports = iEvent;
