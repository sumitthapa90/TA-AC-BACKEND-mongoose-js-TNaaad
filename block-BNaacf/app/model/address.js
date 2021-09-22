var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var addressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pinCode: Number,
  user: Schema.Types.ObjectId,
});
