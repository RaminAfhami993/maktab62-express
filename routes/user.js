const express = require("express");
const generalTools = require("../tools/generalTools");
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.send('EJS')
});

router.get('/home', (req, res) => {
    res.render('pages/home', {username:  'Taha'})
});

router.get('/test/:parameter', (req, res) => {
    res.render('test', {id: req.params.parameter})
});

router.get('/list', (req, res) => {
    const drinks = ['tea', 'coffee', 'water', 'juice', 'milk']
    res.render('list', {drinks})
});

router.get('/user/:id', (req, res) => {
    const users = require('../public/jsons/users.json');

    let user = users.find(x => x.id == req.params.id);
    console.log(user);
    
    res.render('user', {user})
})


module.exports = router;

