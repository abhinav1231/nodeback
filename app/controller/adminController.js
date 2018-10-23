var userSchema = require('../models/userSchema');


var createAdmin = function(req, res){
	// work here
	let username = req.body.name;
	let usermarks = req.body.marks;
	let userresult= req.body.result;
	
	if(username && usermarks){
		var userModel = {
			name : username,
			marks : usermarks,
			userresult : userresult==true ? userresult : false
		};
		console.log("data::",userModel);
		userSchema.create(userModel,(err, data)=>{
			if(err) return res.send({status : 400, message :"Error occured!",Error :err});
			return res.send({status : 200, message :"Succesful created",data : data});
		});
	}else{
		return res.send({status : 400, message :"Please fill all required field"});	
	}
	console.log("create user");
	// res.send({status : 200, message :"Hello"});
}


var getAdmin = function(req, res){
	userSchema.find({},{},function(err, data){
		return res.send({status : 200, message :"Get admins", data : data});	
	});
}

var getAdminById = function(req, res){
	userSchema.find({_id : req.body.adminId},{name : 1},function(err, data){
		return res.send({status : 200, message :"Get admins", data : data});	
	});
}

var postData = function(req, res){
	res.send({status : 200, message:  req.body,message1: req.params.id})
}

var postData1 = function(req, res){
	console.log(req.headers.name,req.headers.class);
	console.log(req.query.name);
	res.send({status : 200, message:  req.body,message1: req.params.id})
}


exports.createAdmin=createAdmin;
exports.postData1 = postData1;
exports.postData = postData;
exports.getAdmin = getAdmin;
exports.getAdminById = getAdminById;

