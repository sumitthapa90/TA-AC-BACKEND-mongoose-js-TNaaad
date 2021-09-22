var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/app", (err) => {
  console.log(err ? err : "complete data");
});

var app = express();

//rought
app.get("/", (req, res) => {
  res.send("Welcome bro");
});

app.listen(7000, () => {
  console.log("Server listen at port 7000");
});

