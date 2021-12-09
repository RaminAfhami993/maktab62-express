const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/user')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/user', userRouter);

app.listen(5005);
console.log('server is running on port 5005 ...');
