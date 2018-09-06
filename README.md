# Employee DEMO
ระบบเก็บบันทึก profile ของพนักงาน โดยใช้ METEOR เป็น web application framework

## ขั้นตอนก่อนทำทำงาน

1. ต้อง install framework METEOR ก่อน โดยเข้าได้ *download* ได้ [ที่นี่](https://www.meteor.com/install)

2. clone หรือ download source code นี้แล้ว ให้เข้าไป ที่ folder ของ app นี้แล้ว run **"meteor "**

## ส่วนประกอบของ source code

แยกเป็น 4 ส่วนหลักๆคือ

* server - code ที่ทำงานฝั่ง server
* client - code ที่ทำงานฝั่ง client เช่น validate, CRUD,layout ต่างๆ
* lib - code ที่ประกาศใช้ database ใน mongodb
* import - code ที่ประกาศใช้ครั้งแรก ตอน start web app

> source code นี้ยังไม่สมบูร์ ยังขาด การ searching และ ทำ paging นะครับ download ไปมี comment อะไร บอกได้ครับ ทำเพื่อศึกษาการทำงาน web framework METEOR
