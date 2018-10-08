let database = require('./config');

let user = {};

user.getData = ( data, callback)=>{
    if(database){
        let sql = 'SELECT * FROM userx'
        database.query(sql,data, (err, results)=>{
            if (err) throw err;
            callback(results);
        });        
    };
};


user.insertData = (data, callback)=>{
    if(database){
        let sql = 'INSERT INTO userx(nombre) VALUES (?)';
        database.query(sql, data, (err, results)=>{
            if(err) throw err;
            callback(results)
        });
    };
};

module.exports = user;