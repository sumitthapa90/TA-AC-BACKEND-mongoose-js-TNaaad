var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: {
      type: String,
      required: true,
      minlength: 100,
      maxlength: 1000,
    },
    tags: { type: String },
    likes: { type: Number, default: 0 },
    author: { type: Schema.Types.ObjectId, ref: "Comments" },
    comments: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

var Article = mongoose.model("Article", articleSchema);
module.exports = Article;
