var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/app", (err) => {
  console.log(err ? err : "Data Transfer");
});

var app = express();

app.get("/", (req, res) => {
  res.send("Welcome party");
});

app.listen(5000, (req, res) => {
  console.log("Server st port 5000");
});
