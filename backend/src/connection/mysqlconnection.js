const {
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} = process.env;



const mysql = require('mysql');

var connection = mysql.createPool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    connectionLimit: 50,
    queueLimit: 100,
    acquireTimeout: 1000000
  });

module.exports = {connection};
