var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/app", (err) => {
  console.log(err ? err : "Colleb");
});

var app = express();

app.get("/", (req, res) => {
  res.send("Party");
});
app.listen(4000, (req, res) => {
  console.log("Server at port 4000");
});
