var express = require("express");
var app = express();
var path = require("path");
var bodyParser= require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "./node_modules")));
// Setting our Views Folder Directory
app.use(express.static(path.join(__dirname, "./client")));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect CSS bootstrap
// app.use('/components', express.static(__dirname + '/node_modules')); // redirect moment compoments
// app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/fonts')); // redirect ui bootstrap

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://pokemongomapper%40gmail.com:pikachu1@smtp.gmail.com');


app.get('/', function (req,res){     console.log(req.body)
res.render("index"); })

app.post('/rsvp', function (req,res){
	console.log('rsvp submitted');
	console.log(req.body)
	// setup e-mail data with unicode symbols
		if(req.body.name.length > 2){
			console.log('mail options');
			var mailOptions = {
  				from: '"RSVP" <pokemongomapper@gmail.com>', // sender address 
			    to: 'tynguyen06@gmail.com', // list of receivers
			    subject: 'Josh & Belinda Wedding RSVP', // Subject line
			    text: 'Hey Guys', // plaintext body
			    html: "<table style='border: 1px solid black;border-collapse: collapse;width: 100%;'><tr><th style='border: 1px solid black;height: 50px;text-align: left;padding: 15px;'>Name</th><th style='border: 1px solid black;height: 50px;text-align: left;padding: 15px;'>RSVP</th><th style='border: 1px solid black;height: 50px;text-align: left;padding: 15px;'># of Guests</th><th style='border: 1px solid black;height: 50px;text-align: left;padding: 15px;'>Email</th><th style='border: 1px solid black;height: 50px;text-align: left;padding: 15px;'>Address</th><th style='border: 1px solid black;height: 50px;text-align: left;padding: 15px;'>Phone</th><th style='border: 1px solid black;height: 50px;text-align: left;padding: 15px;'>Song Request</th><th style='border: 1px solid black;height: 50px;text-align: left;padding: 15px;'>Comments</th></tr><tr><td style='border: 1px solid black;padding: 15px;text-align: left;'>" + req.body.name + "</td><td style='border: 1px solid black;padding: 15px;text-align: left;'>" + req.body.rsvp + "</td><td style='border: 1px solid black;padding: 15px;text-align: left;'>" + req.body.guests + "</td><td style='border: 1px solid black;padding: 15px;text-align: left;'>" + req.body.email + "</td><td style='border: 1px solid black;padding: 15px;text-align: left;'>" + req.body.address + "</td><td style='border: 1px solid black;padding: 15px;text-align: left;'>" + req.body.phone + "</td><td style='border: 1px solid black;padding: 15px;text-align: left;'>"+ req.body.song + "</td><td style='border: 1px solid black;padding: 15px;text-align: left;'>" + req.body.comments + "</td></tr></table>"

			    // html:  "<table style='border-collapse: collapse; border: 1px solid black;width: 250px;'><tr><th style='text-align: left;border: 1px solid black;width: 250px;'>Name</th><th style='text-align: left;border: 1px solid black;width: 250px;'>RSVP</th><th style='text-align: left;border: 1px solid black;width: 250px;'># of Guests</th><th style='text-align: left;border: 1px solid black;width: 250px;'>Email</th><th style='text-align: left;border: 1px solid black;width: 250px;'>Address</th><th style='text-align: left;border: 1px solid black;width: 250px;'>Phone</th><th style='text-align: left;border: 1px solid black;width: 250px;'>Song Request</th><th style='text-align: left;border: 1px solid black;width: 250px;'>Comments</th></tr><tr><td>" + req.body.name + "</td><td>" + req.body.rsvp + "</td><td>" + req.body.guests + "</td><td>" + req.body.email + "</td><td>" + req.body.address + "</td><td>" + req.body.phone + "</td><td>"+ req.body.song + "</td><td>" + req.body.comments + "</td></tr></table>"// html body
			};
			//send mail with defined transport object
			transporter.sendMail(mailOptions, function(error, info){
			    if(error){
			        return console.log(error);
			    }
			    console.log('Message sent: ' + info.response);
			});
		}
		res.redirect('/');
});

var port = process.env.PORT || 5000;
var server = app.listen(port, function(){
	console.log("********** PORT " + port + " PORT **********")
});
