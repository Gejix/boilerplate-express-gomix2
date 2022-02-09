var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
var bodyParser = require("body-parser");
require("dotenv").config();
const mySecret = process.env['MESSAGE_STYLE']

app.use(bodyParser.json());

app.use(function middleware(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
});

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
});

app.get(
  "/now",
  function(req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function(req, res) {
    res.send({ time: req.time });
  }
);

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});


console.log("Hello World");

if (process.env.MESSAGE_STYLE === "uppercase"){

app.get("/json", (req, res) => {

res.json({message: "HELLO WORLD"})

});

}

else{

app.get("/json", (req, res) => {

res.json({message: "hello world"})

});

}

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

app.get("/", function(req, res) {
    res.send("Hello Express");
  });







 module.exports = app;
