var express = require("express");
var mongooes = require("mongoose");

mongooes.connect("mongodb://localhost/app", (err) => {
  console.log(err ? err : "Complete data again");
});

var app = express();

//roughts
app.get("/", (req, res) => {
  res.send("Welcome sonali");
});

app.listen(8000, () => {
  console.log("Server listen at port 8000");
});
