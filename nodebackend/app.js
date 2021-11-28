const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//MySQL

const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'bmabank'
});

app.get('/colours/', (req, res) => {
    pool.getConnection((err, connection) => {
        if(err){ 
            throw err
        }
        console.log(`Connected as ${connection.threadId}`)

        connection.query('SELECT * from farbe', (err, rows) => {
            connection.release();
            if (!err) {
                res.send(rows);
            }else{
                console.log(err);
            }
        }); 
    });
});

app.get('/farbkombi/:id' , (req, res) => {
    pool.getConnection((err, connection) => {
        if(err){ 
            throw err
        }
        console.log(`Connected as ${connection.threadId}`)

        connection.query('SELECT * from kombinationen WHERE FKFarbe1 = ? OR FKFarbe2 = ?', [req.params.id,req.params.id], (err, rows) => {
            connection.release();
            if (!err) {
                res.send(rows);
            }else{
                console.log(err);
            }
        }); 
    });
});

//Listen on Port
app.listen(port, () => console.log(`listen on port ${port}` ))