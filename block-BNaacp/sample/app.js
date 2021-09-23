var express = require("express");
var mongoose = require("mongoose");
var User = require("./model/user");

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Data comming");
});

var app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/users", (req, res, next) => {
  User.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.get("/users", (req, res) => {
  User.find({}, (err, users) => {
    console.log(err);
    res.json({ users: users });
  });
});

app.get("/user/:id", (err, users) => {
  var id = req.params.id;
  User.findById(id, (err, users) => {
    console.log(err);
    res.json(users);
  });
});

//error
app.use((req, res, next) => {
  res.send("Page not found");
});

app.listen(9000, () => {
  console.log("Server listin at port 9000");
});
