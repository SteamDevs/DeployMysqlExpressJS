const express = require('express');
let app = express();

let us = require('./user');

app.get('/', (req, res)=>{
    
    us.getData( (err, userDB)=>{
        if (err){
            return res.status(400).json({
                ok: false,
                message: 'Algo fallo',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            message: 'todo ha salido bien',
            result: userDB
        });
    });
});

module.exports = app;