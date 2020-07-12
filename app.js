const express = require("express");
const bodyParser = require("body-parser");
const ip = process.env.IP || "localhost";
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/educators", function(req, res) {
	res.render("educators");
});

app.get("/parents", function(req, res) {
	res.render("parents");
});

app.get("/resources", function(req, res) {
	res.render("resources");
});

app.get("/contactus", function(req, res) {
	res.render("contactus");
});

app.get("/k2", function(req, res) {
	res.render("k2");
});

app.get("/35", function(req, res) {
	res.render("35");
});

app.listen(port, ip, function(){
	console.log("HEY LOOK, THE SERVER IS WORKING!");
});