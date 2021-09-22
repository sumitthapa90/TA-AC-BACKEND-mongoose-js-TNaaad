var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  discriptions: String,
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;