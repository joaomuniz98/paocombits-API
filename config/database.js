const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user:  process.env.DATABASE_NAME,
    password:  process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

module.exports = connection;
