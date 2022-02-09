var express = require('express');
var app = express();

console.log("Hello World");

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

























 module.exports = app;
