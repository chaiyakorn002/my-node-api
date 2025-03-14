// db.js
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: '110.77.148.116',
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