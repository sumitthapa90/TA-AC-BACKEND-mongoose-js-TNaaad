var express = require("express");
var mongoose = require("mongoose");
var User = require("./model/user");

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Data comming");
});

var app = express();

app.use(express.json());

//roughts

app.post("/users", (req, res, next) => {
  User.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.get("/users", (req, res, next) => {
  User.find({}, (err, users) => {
    console.log(err);
    res.json({ users: users });
  });
});

app.get("/user/:id", (err, users, next) => {
  var id = req.params.id;
  User.findById(id, (err, users) => {
    console.log(err);
    res.json(users);
  });
});

app.put("/users/:id", (req, res, next) => {
  var data = req.body;
  var id = req.params.id;
  User.findByIdAndUpdate(id, data, { new: true }, (err, updatedUser) => {
    if (err) return next(err);
    res.json(updatedUser);
  });
});

app.delete("/users/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    if (err) return next(err);
    res.send(`${deletedUser.name} is deleted.`);
  });
});

//error
app.use((req, res, next) => {
  res.send("Page not found");
});

app.listen(9000, () => {
  console.log("Server listin at port 9000");
});
