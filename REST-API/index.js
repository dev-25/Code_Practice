
const express = require('express');
const app = express()
const PORT = 5000;
app.use(express.json())

var users = require('./routes/users.js')
app.use('/users', users)

app.listen(PORT);