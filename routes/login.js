// routes/login.js

const express = require('express');
const router = express.Router();
const db = require('../config/db'); // นำเข้าโมดูลที่เชื่อมต่อกับฐานข้อมูล MySQL

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // ค้นหาผู้ใช้ในฐานข้อมูล
    db.query("SELECT * FROM `psweb2_user` WHERE U_Name = ? AND U_Password = ?", [username, password], (err, results, fields) => {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }

        if (results.length === 0) {
            // ไม่พบผู้ใช้ที่ตรงกันในฐานข้อมูล
            return res.status(400).json({ message: "Invalid username or password!" });
        }

        const user = results[0];
        
        return res.status(200).json({
            message: "Login Successful",
            username: user.U_Name,
            password: user.U_Password,
            FName: user.U_Sname,
            LName: user.U_Lname
        });
    });
});

module.exports = router;
