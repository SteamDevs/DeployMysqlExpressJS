const express = require('express');

let app = express();

let PORT = 123;

//IP 46.249.204.26:26109/api/v1/parents/1

app.listen(PORT, ()=>{
    console.log('BackEnd Online');
});