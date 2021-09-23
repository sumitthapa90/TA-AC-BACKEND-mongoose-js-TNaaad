var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, lowercase: true, match: /@/ },
    age: { type: Number, min: 18, minlength: 7, maxlength: 15 },
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchema);
module.exports = User;
