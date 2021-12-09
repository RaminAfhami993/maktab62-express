const express = require('express');
const router = express.Router();
const path = require('path');
const generalTools = require('../tools/generalTools')



router.get('/me', function (req, res) {
    res.send('Hello from user router')
});


router.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});



router.post('/test', function (req, res) {
    console.log(req.body);
    // console.log(req.myUrl);


    res.json({ ...req.body, id: generalTools.randomInteger(1, 1000), date: new Date() })
});



module.exports = router;


