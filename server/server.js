const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "databaseets"
});

app.post('/customer', (req, res) => {
    const sql = "SELECT * FROM customer WHERE Email =? AND Password =?";
    
})

app.get("/api", (req, res) => {
    return res.json({message: "this nut"});
})

app.listen(8081, () => {console.log("listening")});