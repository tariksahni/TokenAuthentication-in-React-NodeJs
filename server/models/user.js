const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Defining a Model

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

//Create a class
const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
