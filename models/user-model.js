const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: String,
    googleId: String
});

//model represents collections
const User = mongoose.model('user', userSchema);

module.exports = User;