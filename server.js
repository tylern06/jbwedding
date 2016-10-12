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
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: '"Pikachu" <pokemongomapper@bgmail.com>', // sender address 
    to: 'tynguyen06@gmail.com', // list of receivers 
    subject: 'Hello ✔', // Subject line 
    text: 'Hello world', // plaintext body 
    html: '<b>Testing 123 world 🐴</b>' // html body 
};
 

app.get('/', function (req,res){
		console.log(req.body)
 		res.render("index");
})

app.get('/test', function (req,res){
		// send mail with defined transport object 
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        return console.log(error);
		    }
		    console.log('Message sent: ' + info.response);
		});
		res.render('test');
})

port = 8000;
var server = app.listen(port, function(){
	console.log("********** PORT " + port + " PORT **********")
});
