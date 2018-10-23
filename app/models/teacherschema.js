var mongoose = require('mongoose');
var Schema = mongoose.Schema;



 teacherSchema = new Schema({
    name: {type : String},
    email: {type : String},
    age: {type : Number},
    password : { type : String},
    gender : {   
        male: {type : String},
        female: {type : String}
    },
    accounttype : {
        type : String,
        enum : ['Student','Teacher','Admin','Super Admin','Watchman','Doctor'],
        default : 'Student'
    },
    address: {
            line: {
                    line1: {type : String},
                    line2: {type : String},
                  },
            city: {type : String},
            state: {type : String},
            pincode: {type : String}        
        },
    phone: {type : String},
    subject: {type : String},    
    education : {
        bachelor: {type : String},
        master: {type : String},
        phd: {type : String}
    },
    join: {type : String}

})

var teacher = mongoose.model('teacher', teacherSchema);

module.exports = teacher;