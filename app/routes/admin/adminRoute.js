
var express=require('express');
var adminCtrl=require('../../controller/adminController');
var signupCtrl=require('../../controller/signupcontroller');
var teacherCtrl=require('../../controller/teachercontroller');

var router=express.Router();
var jwt = require('jsonwebtoken');

// router.post('/createAdmin',adminCtrl.createAdmin);
// router.post('/postData/:id',adminCtrl.postData); //get params by route
// router.post('/postData1/:id',adminCtrl.postData1);

// router.get('/getAdmin',adminCtrl.getAdmin);
// router.post('/getAdminById',adminCtrl.getAdminById);

router.post('/teacherAdmin',checkHeader,teacherCtrl.teacherAdmin);

// router.get('/getteacherAdmin',adminCtrl.getteacherAdmin);
// router.get('/getteacherAdminById/:name',adminCtrl.getteacherAdminById);

// router.post('/updateAdminById', adminCtrl.updateAdminById);
// router.post('/deleteAdminById', adminCtrl.deleteAdminById);

router.post('/login', signupCtrl.login);

router.post('/signup', signupCtrl.signup);

function checkHeader(req, res,next){
	console.log("headers:::",req.headers.authorization);
	if(req.headers.authorization){
			jwt.verify(req.headers.authorization,'digitalDiary',function(err, result){
				if(result) console.log("match jwt:",result);
				console.log('ressssssss',result)
			})
		next();
	}else{
		res.send({status : 400, message :"Token missing"})
	}
}

module.exports=router;