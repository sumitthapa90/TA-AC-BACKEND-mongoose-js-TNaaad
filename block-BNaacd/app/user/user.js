var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  isAdmine: Boolean,
});

var userSchema = new Schema({
  name: { type: String },
  email: { type: String, lowercase: true },
  age: {type: Number}
});
