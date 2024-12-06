// function test(p){
//     console.log('Server is running '+ p); //เอามาใส่เพื่อตอนรันมีข้อความ
// }
// const test = ()=> {
//     console.log('Server is running'); //เอามาใส่เพื่อตอนรันมีข้อความ แบบ anomynus ไม่ระบุ
// }
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 5000; //เช็ค port โค้ดนี้เป็นการตั้งค่าพอร์ตสำหรับแอปพลิเคชันใน JavaScript โดยใช้ตัวแปรล้อมรอบ (environment variable) ที่ชื่อว่า APP_PORT หรือถ้าตัวแปรนี้ไม่ได้ถูกกำหนดไว้ ก็จะใช้ค่าเริ่มต้นเป็น 5000 แทน

//Routes
require('./app/routes/user.route')(app);


// app.get('/', (req, res) => {
//     res.send('Home');
// });

// app.get('/about', (req, res) => {
//     res.send('about');
// });


app.listen(PORT, () => console.log('Server is running '+ PORT));
