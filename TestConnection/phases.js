const express = require('express');
const mysql = require('mysql');

const app = express();

//app.use(express.logger());

var db_config = {
    host: '127.0.0.1',
    user: 'guateweb4_api',
    password: 's605jzrPTH',
    database: 'guateweb4_api'
};

var connection;


//paso 1 llamar la configuracion de la base de datos
function handleDisconnect() {
    console.log('1. conectando a la base de datos');
    connection = mysql.createConnection(db_config); 
    
    //Paso 2: un eror controlado
    connection.connect((err)=> {              	
        if (err) {                                    
            setTimeout(handleDisconnect, 1000);
            console.log('Error de DB', err); 
        }                                     
    });                                     	

    //Paso 3: Un error por un protocolo
    connection.on('error', (err)=> {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 	
            console.log('3. el eror es:  ', err);
            handleDisconnect();                      	
        } else {                                      	
            throw err;                                  
        }
    });
}

handleDisconnect();

app.get('/', (req, res)=> {
    connection.query('SELECT * from t_users', (err, rows, fields)=> {
        if(err) throw err;
        res.send(['hola a todos desde siempre', rows]);
    });
});

var port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log("Servidor iniciado:  " + port);
});