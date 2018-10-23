var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema({
	name : {type : String, unique : true},
	marks : {type : Number},
	result : {type : Boolean,default : false},
	createdAt: { type : Date, default : Date.now}
});


var user = mongoose.model('user',userSchema);

module.exports = user;