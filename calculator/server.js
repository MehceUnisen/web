//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/mycalc", function(req, res) {
    res.sendFile(__dirname + "/html/my-calculator.html")
});
// app.post("/", function(req, res) {
//     var num1 = Number(req.body.num1);
//     var num2 = Number(req.body.num2);
//     res.send("the result " + (num1 + num2));
// });

app.post("/mycalc", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    res.send("result is " + (num1 * num2));

});

app.listen(3000);