var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstname:String,
    lastname: String,
    email: {
      type: String,
      unique: true
    },
    newsletter: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('User', userSchema);
