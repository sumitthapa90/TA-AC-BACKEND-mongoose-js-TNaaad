var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/app", (err) => {
  console.log(err ? err : "Complete data ");
});

var app = express();

app.get("/", (req, res) => {
  res.send("Welcome ");
});

app.listen(9000, () => {
  console.log("Server listen at port 9000");
});
