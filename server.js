var express = require("express");

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
// Application program interface
// GET routes that server JSON
// POST take information in JSON and format and add it a data

app.get("/", function (request, response) {
  response.send("Cars API me");
});

// sends cars to the web page
app.get("/api/notes", function (request, response) {
  response.send("this is me2");
  //console.log(response);
});

app.post("/api/notes", function (request, response) {
  console.log("enter post  ; ");
  //console.log(response);
  //   const notes = $(".note-title").attr("text");
  //   console.log(notes);
  //saveNote();
  //cars.push(request.body);
  //response.send("car was added");
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
