var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articalSchema = new Schema(
  {
    tittle: { type: String },
    description: { type: String },
    tags: { type: String },
    createdAt: { type: Date, default: new Date() },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

var Artical = mongoose.model("Artical", articalSchema);

module.exports = Artical;
