var signupSchema = require('../models/signupschema');
var bcrypt = require('bcrypt');

var signup = function(req, res) {

  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let password = req.body.password;

  if (firstname && email && password) {
    bcrypt.hash(password, 10, function(err, hash) {
      if (err) return res.send({ status: 400, message: "Error occured during hash!", Error: err });
      console.log('encrypted hash::', hash);
      var signupModel = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hash,
      };
      console.log("data::", signupModel);
      signupSchema.create(signupModel, (err, data) => {
        if (err) return res.send({ status: 400, message: "Error occured!", Error: err });
        return res.send({ status: 200, message: "Succesful created signup", data: data });
      });
    })

  } else {
    return res.send({ status: 400, message: "Please fill all required field" });
  }
  console.log("create user");
}


var login = function(req, res) {

  let email = req.body.email;
  let password = req.body.password;

  if (email && password) {
  	console.log(email,password);
    signupSchema.findOne({ email: email }, {}, function(err, getdata) {
      if (err) return res.send({ status: 400, message: "please provide email and password" });
      if (getdata) {
        bcrypt.compare(password,getdata.password, function(err, result) {
          if (result) {
            return res.send({ status: 200, message: "login successfully", data: getdata });
  	         console.log(email,password);

          } else {
            return res.send({ status: 400, message: "password DOES NOT MATCH" });
          }
        })
      } else {
        return res.send({ status: 400, message: "email not exit" });
      }
    })
  } else {
    return res.send({ status: 400, message: "Please fill all required field" });
  }
  console.log("create user");
}



exports.login = login;

exports.signup = signup;
