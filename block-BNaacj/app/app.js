var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/app", (err) => {
  console.log(err ? err : "Done");
});

var app = express();

app.get("/", (req, res) => {
  res.send("Sumit");
});

app.listen(2000, () => {
  console.log("Server listen at port 2000");
});
