var express=require('express');
var bodyparser=require('body-parser');
var cors=require('cors');

var app=express();
var adminRoute = require('./app/routes/admin/adminRoute.js');
var db = require('./app/config/dbconnection');

var PORT = 4000;

app.use(cors());
app.use(bodyparser.json());
app.listen(process.env.PORT || PORT,function(err,data){
	console.log(`server running on  ${PORT}`);
	db.connectDB();
});

app.use('/',function(req, res){
	res.send({status:200, message:"welcome abhinav"});
});
app.use('/admin',adminRoute);