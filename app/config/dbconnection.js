var mongoose = require('mongoose');
var constant = require('./constant');

function connectDB(){
	console.log('DB url is',constant.DBURL);
	mongoose.connect(constant.DBURL);
}

var obj = {
	connectDB : connectDB
}

module.exports = obj;