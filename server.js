//server.js
const express = require('express');
const db = require('./config/db'); // นำเข้าโมดูลที่เชื่อมต่อกับฐานข้อมูล MySQL
const loginRoute = require('./routes/login'); // นำเข้าเส้นทางสำหรับ login

const app = express(); // สร้างแอป Express
app.use(express.json()); // รองรับการรับส่งข้อมูลแบบ JSON

// ใช้ route ต่าง ๆ ที่นำเข้ามา
app.use(loginRoute); // เส้นทางสำหรับ login

// Route หลักเพื่อทดสอบการเชื่อมต่อ
app.get('/', (req, res) => {
    res.send('PS API is running');
});

// เริ่มต้นเซิร์ฟเวอร์
const port = process.env.PORT || 5050; // ใช้ port ที่ Vercel กำหนดหากมี, ถ้าไม่มีก็ใช้ 5050
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});