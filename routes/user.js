const express = require("express");
const generalTools = require("../tools/generalTools");
const router = express.Router();
const generalTools = require('../tools/generalTools')

router.post('/info', function(req, res) {
    if (!req.body.name || !req.body.job) {
        return res.json({success: false, message: 'Empty Field'})
    };
    return res.json({...req.body, date: new Date(), id: generalTools.randomInteger(1, 1000), success: true})
});


module.exports = router;