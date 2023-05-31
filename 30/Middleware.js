//Code1
var express = require('express');
var app = express();

//Middleware function to log request protocol
app.use('/', (req, res, next) =>{
   console.log("A request for things received at " + Date.now());
   next();
});

// Route handler that sends the response
app.get('/', (req, res)=>{
   res.send('HEHH');
});

app.listen(3000);


// // Code2
var express = require('express');
var app = express();

//First middleware before response is sent
app.use((req, res, next) =>{
    console.log("Starting");
    next();
});

//Route handler
app.get('/', (req, res, next) => {
    res.send("Middle");
    next();
});

app.use('/', (req, res) =>{
    console.log('End');
});

app.listen(3000);

