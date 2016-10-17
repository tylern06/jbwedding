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


app.get('/', function (req,res){
		console.log(req.body)
 		res.render("index");
})

app.post('/rsvp', function (req,res){
	// setup e-mail data with unicode symbols
		if(req.body.name > 2){
			var mailOptions = {
			    from: '"RSVP" <pokemongomapper@bgmail.com>', // sender address
			    to: 'belindanghiem@gmail.com', // list of receivers
			    subject: 'Josh & Belinda Wedding RSVP', // Subject line
			    text: 'Hey Guys', // plaintext body
			    html:  "<table style='border-collapse: collapse; border: 1px solid black;width: 250px;'><tr><th style='text-align: left;'>Name</th><th style='text-align: left;'>RSVP</th><th style='text-align: left;'>Song Request</th></tr><tr><td>" + req.body.name + "</td><td>" + req.body.rsvp + "</td><td>" + req.body.song + "</td></tr></table>"// html body
			};
			console.log(req.body)
			//send mail with defined transport object
			transporter.sendMail(mailOptions, function(error, info){
			    if(error){
			        return console.log(error);
			    }
			    console.log('Message sent: ' + info.response);
			});
		}
		res.redirect('/');
})

var port = process.env.PORT || 5000;
var server = app.listen(port, function(){
	console.log("********** PORT " + port + " PORT **********")
});
