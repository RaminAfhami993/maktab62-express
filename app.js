const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


// app.use(function(req, res, next) {
//     req.myUrl = req.url
//     next()
// })




app.use('/user', userRouter);


app.listen(5005);
console.log('server is running on port 5005 ...');
