var express = require("express");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));


// inbuilt midlewere
app.use(express.json);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome node");
});

app.listen(7000, () => {
  console.log("Server liustin at port 7000");
});
