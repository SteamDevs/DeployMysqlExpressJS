const mysql = require('mysql');

var chain = { host: 'localhost', user: 'root', password: '', database: 'ukload'}

var chainRemote = { host: 'localhost', user: 'guateweb4_dep', password: '306wuupa307', database: 'guateweb4_dep' }

let con = mysql.createConnection(chainRemote);

module.exports = con;

//10.123.0.68
/*
// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  ENVIROMENT
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; 

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB =  chain;
} else {
    urlDB = chainRemote;
}

process.env.URLDB = urlDB;

let con = mysql.createConnection(urlDB);

module.exports = con;*/