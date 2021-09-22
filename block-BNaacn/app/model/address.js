var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var addressSchema = new Schema(
  {
    village: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: Number },
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

var Address = mongoose.model("Address", addressSchema);
module.exports = Address;
