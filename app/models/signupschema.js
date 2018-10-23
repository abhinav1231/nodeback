var mongoose = require('mongoose');
var Schema = mongoose.Schema;

loginSchema = new Schema({	
    email: {type : String},
    password : { type : String},
});


signupSchema = new Schema({
	firstname : {type : String},
	lastname : {type : String},
    email: {type : String},
    password : { type : String},
});

var login = mongoose.model('login',loginSchema);

var signup = mongoose.model('signup',signupSchema);

module.exports = signupSchema;
module.exports = signup;