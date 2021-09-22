var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
      match: /@/,
    },
    age: { type: Number, default: 18 },
    password: { type: String, minlength: 5, maxlength: 15 },
    createdAt: Date,
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchema);

module.exports = User;
