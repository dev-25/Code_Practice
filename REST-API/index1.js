const express = require('express');
const app = express()

// Basic response
app.get('/',(req,res) => {
    res.send('Hello there')
    console.log('Request send')
})

// Routing
let data = require('./index2.js')
app.use('/database', data)


app.listen(3000,(ch) =>{
    console.log('App is running on Port 3000')
})