var mongoose = require("mongoose");
const Article = require("./article");

var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: { type: String, required: true, maxlength: 3000 },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    article: { type: Schema.Types.ObjectId, ref: "Article" },
  },
  { timestamps: true }
);
var Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
