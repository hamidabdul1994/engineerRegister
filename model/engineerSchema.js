var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;
var timestamps = require('mongoose-timestamp');
    autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.connect("mongodb://localhost:27017/test");
autoIncrement.initialize(connection);
db.once("open",function () {
  console.log("open");
});

 var engineerSchema = new Schema({
        "engineer_data": {
            "name": String,
            "hire_city": String,
            "original_submitted": {
                "engineer_certificates": Boolean,
                "final_year_marksheet": Boolean
            }
        },
        "bank_information": {
            "pan": String,
            "bank_name": String,
            "bank_account_number": Number,
            "bank_ifsc_code": String
        },
        "qualification_data": {
            "diploma": String,
            "degree": String,
            "discipline": String,
            "year_of_passing": Number,
            "aggregate": Number,
            "final_year": Number,
            "training_institute":String,
            "training_duration": Number,
            "training":String
        },
        "contact_and_personal_data": {
            "img_url":String,
            "mobile_number":Number,
            "email_id":String,
            "date_of_birth": String,
            "father_name": String,
            "father_mobile_number": Number,
            "father_occupation": String,
            "annual_salary": String,
            "current_address": String,
            "permanent_address": String
        },
        "engineer_id":{type:Number,default:1}

 });

engineerSchema.plugin(timestamps);
engineerSchema.plugin(autoIncrement.plugin, {
    model: 'engineer',
    field: 'engineer_id',
    startAt: 1
});
 module.exports = mongoose.model("engineer",engineerSchema);
