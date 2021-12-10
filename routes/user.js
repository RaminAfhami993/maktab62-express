const express = require("express");
const generalTools = require("../tools/generalTools");
const router = express.Router();
const path = require('path')

router.get('/', (req, res) => {
    res.send('EJS')
});

module.exports = router;