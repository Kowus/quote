var mongoose = require('mongoose');

var quoteSchema = new mongoose.Schema({
    quote:String,
    user:String
});


module.exports = mongoose.model('Quote', quoteSchema);
