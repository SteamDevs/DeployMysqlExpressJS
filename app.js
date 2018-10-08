require('./config');
const express = require('express');
const bodyParser = require('body-parser');

//Routes
let routeUser = require('./userRoute');

//INIT
var app = express();

//Esto es por heroku!!

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS"); 
    next();
});

//BODY PARSER CONFIG
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//let PORT = 3000;

//IP 46.249.204.26:26109/api/v1/parents/1

app.use('/usex/endpoint', routeUser);

app.listen(process.env.PORT, ()=>{
    console.log('BackEnd Online');
});