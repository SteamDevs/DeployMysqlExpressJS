const mysql = require('mysql');

let chain = { host: 'localhost', user: 'root', password: '', database: 'ukload'}

let conexion = mysql.createConnection(chain);

module.exports = conexion;