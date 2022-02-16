//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send();
});

app.get("/contact", function(req, res) {
    res.send("you've reached");
});

app.get("/about", function(req, res) {
    res.send("I'm so horny lol that's all about me");
})

app.listen(3000, function() {
    console.log("server started on port 3000");
});