const mysql = require('mysql');

let chain = { host: 'localhost', user: 'root', password: '', database: 'ukload'}

let chainRemote = { host: '10.123.0.68', user: 'guateweb4_dep', password: '306wuupa307', database: 'guateweb4_dep' }

let conexion = mysql.createConnection(chainRemote);

module.exports = conexion;