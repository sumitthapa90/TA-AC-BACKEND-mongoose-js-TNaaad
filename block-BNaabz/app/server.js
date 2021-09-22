var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/app", (err) => {
  console.log(err ? err : "Connected to database");
});

var app = express();

app.use(logger("dev"));

//rougth

app.get("/", (req, res) => {
  res.send("Welcome Express");
});

app.get("/about", (req, res) => {
  res.send("Welcome about");
});

//error

app.use((req, res, next) => {
  res.send("Page not found");
});

app.listen(5000, () => {
  console.log("Server listin at port 5000");
});
