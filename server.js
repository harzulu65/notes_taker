var express = require("express");
var path = require("path");

// var tableData = require("./data/tablenotes");

var app = express();
var PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept"
  );
  next();
});

// public
app.use(express.static("public"));

// Shows index page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// shows notes page
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// sends notes
var data = require("./db/db.json");

app.get("/api/notes", function (req, res) {
  res.send(data);
});

// saves one note
app.post("/api/notes", function (req, res) {
  var note = req.body;
  note.id = data.length;
  data.push(req.body);
  res.send("note was added");
});

// delete one note

app.delete("/api/notes/:id", function (req, res) {
  console.log(data);
  var id = req.params.id;
  data.splice(id, 1);
  res.send("note was deleted");
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
