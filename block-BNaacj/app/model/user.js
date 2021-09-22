var mongooes = require("mongoose");

var Schema = mongooes.Schema;

var username = new Schema(
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
