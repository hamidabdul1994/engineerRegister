var express = require('express');
var route = express();
var path = require('path');
var multer  = require('multer');
var engineerSchema = require('../model/engineerSchema');
var os = require('os');
var ip = 34.208.235.203;
//os.networkInterfaces().wlan1[0].address;
var fileName ;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, path.basename(file.originalname,path.extname(file.originalname))+ '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({ storage: storage });



route.post("/createEngineerData",upload.single('file'),function (req,res) {
console.log("client IP Address ::",req.ip);
var engineer_data = JSON.parse(req.body.engineer_data);
engineer_data.contact_and_personal_data.img_url=req.file.path;
var promise =engineerSchema(engineer_data).save(function (d,e) {
   res.send({"img_url":"http://"+ip+":"+route.get('port')+"/"+e.contact_and_personal_data.img_url,"engineer_name":e.engineer_data.name,"mobile_number":e.contact_and_personal_data.mobile_number,"email_id":e.contact_and_personal_data.email_id});
});
//  promise.pre('save', function(next) {
// //Image upload
// console.log("pre Hooks");
// return next();
//
// });
 // promise.then(function (d,e) {
 //   console.log("done",d,e);
 //   res.send("done");
 //
 // })

});

module.exports = route;
