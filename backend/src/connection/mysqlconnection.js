const {
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} = process.env;



const mysql = require('mysql');

var connection = mysql.createConnection({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD
  });

module.exports = {connection};
