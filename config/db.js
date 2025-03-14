// db.js
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: '10.104.1.12',
    user: 'psweb2',
    password: 'PSAdmin@8',
    database: 'dbps2'
});

// ตรวจสอบการเชื่อมต่อ
conn.connect(err => {
    if (err) {
        console.error('Error connecting to the MySQL database:', err);
        return;
    }
    console.log('MySQL successfully connected to dbps2!');
});

module.exports = conn;