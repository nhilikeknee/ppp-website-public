const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const enforce = require('express-sslify');
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.get("/", function (req, res) {
	res.render("index", { title: "index" });
});

app.get("/educators", function (req, res) {
	res.render("educators", { title: "educators" });
});

app.get("/parents", function (req, res) {
	res.render("parents", { title: "parents" });
});

app.get("/resources", function (req, res) {
	res.render("resources", { title: "resources" });
});

app.get("/contactus", function (req, res) {
	res.render("contactus", { title: "contactus" });
});

app.get("/k2", function (req, res) {
	res.render("k2", { title: "k2" });
});

app.get("/35", function (req, res) {
	res.render("35", { title: "35" });
});

app.get("/messagesent", function (req, res) {
	res.render("messagesent", { title: "messagesent" });
});

/* SWEETETH --Flash Popup Before Redirect*/
app.post("/contactform", function (req, res) {
	async function main() {
		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			auth: {
				user: 'mayushtestemail@gmail.com',
				pass: 'mayush68359!'
			}
		});

		let info = await transporter.sendMail({
			from: '"PPP Website" <mayushtestemail@gmail.com>', // sender address
			to: "itsnhilikeknee@gmail.com", // list of receivers
			subject: req.body.subject + " " + req.body.subjectOther, // Subject line
			text: "name: " + req.body.name + "\nemail address: " + req.body.email + "\nreferral" + req.body.referral + ": " + req.body.referralOther + "\nmessage:" + req.body.message, // plain text body
			html: "<p style='font-size:14px;'><strong style='font-size:14px; color: grey;'>Name of Sender:</strong> " + req.body.name + 
			"<br><strong style='font-size:14px; color: grey;'>Sender's Email Address:</strong> " + req.body.email + 
			"<br><strong style='font-size:14px; color: grey;'>How Sender Heard About Us:</strong> " + req.body.referral + " " + req.body.referralOther +
			"<br><strong style='font-size:14px; color: grey;'>Message:</strong> <br>" + req.body.message + "</p>", // html body
		});
		console.log("Message sent: %s", info.messageId);
	}
	main().catch(console.error);
	res.redirect("/messagesent");
});

app.listen(port, function () {
	console.log("HEY LOOK, THE SERVER IS WORKING!");
});

