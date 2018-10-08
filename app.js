const express = require('express');

//Routes
let routeUser = require('./userRoute');

//INIT
var app = express();

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS"); 
    next();
});


let PORT = 3000;


//IP 46.249.204.26:26109/api/v1/parents/1

app.use('/usex/get', routeUser);

app.listen(PORT, ()=>{
    console.log('BackEnd Online');
});