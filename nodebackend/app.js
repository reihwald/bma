const express = require('express');
const mysql = require('mysql');
var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

const app = express();
var cors = require('cors')
app.use(cors());
app.options('*', cors());
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
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
https.createServer(options, app)
.listen(port, function (req, res) {
  console.log(`Server started at port ${port}`);
});