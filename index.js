const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/newDB');

const User = mongoose.model("User", { username: "string", password: "string" });




// create

// let data =   [
//     { username: "Taha", password: "123" }, 
//     { username: "Hamid", password: "456" }
// ];

// User.insertMany(data, function (err, result) {
//     if (err) {
//         return console.log('err --------> ', err);
//     }
//     console.log('result --------> ', result);
// })


// read
// User.find({}, function(err, users) {
//     if (err) {
//         return console.log("err ====> ", err);
//     };
//     console.log('users ====> ', users);
// })


// update
// User.updateOne({username: "Taha"}, {password: "789"}, function(err, result) {
//     if (err) {
//         return console.log("err ====> ", err);
//     };
//     console.log('result ====> ', result);
// })


// delete
// User.deleteOne({username: "Taha"}, function(err, result) {
//     if (err) {
//         return console.log("err ====> ", err);
//     };
//     console.log('result ====> ', result);
// })

















const fs = require('fs')

fs.writeFile("./myfile.txt", "Hello", function(err) {

})