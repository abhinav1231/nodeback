var teacherSchema = require('../models/teacherschema');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


var teacherAdmin = function(req, res){
	// work here
	let name = req.body.name;
	let email = req.body.email;
	let age = req.body.age;
	let password = req.body.password;
	let gender = req.body.gender;	
	let address = req.body.address; 
	let accounttype = req.body.accounttype;
	let phone= req.body.phone;
	let subject = req.body.subject;
	let education = req.body.education;
	let type = req.body.accounttype;
	let join= req.body.join;

	jwt.sign({email : email}, 'digitalDiary',{expiresIn:'10min'},function(err, result){
		console.log("jwt web token::",result);
	})
	
	if(name){
		bcrypt.hash(password,10,function(err,hash){
			if(err) return res.send({status : 400, message :"Error occured during hash!",Error :err});
			console.log('encrypted hash::',hash);
				var teacherModel = {
				name : name, 
				email: email, 
				age: age, 
				password : hash,
				gender :  {"male":gender.male, "female":gender.female},
				accounttype : type,
				address: {line:{"line1" : address.line.line1,"line2":address.line.line2},
				           state : address.state,
				           city : address.city,
				           pincode : address.pincode
				       }, 
				phone   : phone, 
				subject : subject, 
				education : {"bachelor":education.bachelor,"master":education.master,"phd":education.phd},
				join: join,
			};
			// console.log("data::",teacherModel);
			teacherSchema.create(teacherModel,(err, data)=>{
				if(err) return res.send({status : 400, message :"Error occured!",Error :err});
				return res.send({status : 200, message :"Succesful created",data : data});
			});
		})

	}else{
		return res.send({status : 400, message :"Please fill all required field"});	
	}
	console.log("create user");
	// res.send({status : 200, message :"Hello"});
}


// var getteacherAdmin = function(req, res){
// 	teacherSchema.find({},{},function(err, data){
// 		return res.send({status : 200, message :"Get teacher admins", data : data});	
// 	});
// }

// var getteacherAdminById = function(req, res){
// 	teacherSchema.findOne({name : req.params.name},{name : 1},function(err, data){
// 		return res.send({status : 200, message :"Get teacher admins", data : data});	
// 	});
// }

// var updateAdminById = function(req, res){
// 	// condition, update,callback
// 	teacherSchema.update({_id : req.body.id},{$set : {name : req.body.name}},function(err, updateData){
// 		return res.send({status : 200, message :"Update Succesful!."});	
// 	})
// }

// var deleteAdminById = function(req, res){
// 	// condition, update,callback
// 	teacherSchema.remove({_id : req.body.id},function(err, updateData){
// 		return res.send({status : 200, message :"Delete Succesful!.",data : updateData});	
// 	})
// }





 exports.teacherAdmin=teacherAdmin;
// exports.getteacherAdmin = getteacherAdmin;
// exports.getteacherAdminById = getteacherAdminById;

// exports.updateAdminById = updateAdminById;
// exports.deleteAdminById = deleteAdminById;