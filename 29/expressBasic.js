const express = require('express');
const app = express()

// app.get('/',(req,res) => {
//     res.send('This is Homepage');
// })

// app.get('/hello', (req,res) =>{
//     res.send('This is Hello')
// })

// app.post('/hello', function(req, res){
//     res.send("You just called the post method at '/hello'!\n");
// });

var things = require('./things.js');

app.use('/things', things);

app.listen(3000)