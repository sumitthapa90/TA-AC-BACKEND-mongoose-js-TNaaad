var mongooes = require("mongoose");

var Schema = mongooes.Schema;

var AddressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pinCode: Number,
  user: Schema.Types.ObjectId,
});
