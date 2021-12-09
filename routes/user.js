const express = require("express");
const generalTools = require("../tools/generalTools");
const router = express.Router();
const path = require('path')

router.post('/info', function(req, res) {
    if (!req.body.name || !req.body.job) {
        return res.json({success: false, message: 'Empty Field'})
    };
    return res.json({...req.body, date: new Date(), id: generalTools.randomInteger(1, 1000), success: true})
});

router.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});


module.exports = router;