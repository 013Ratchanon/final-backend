# DEPLOYMENT.md

## ขั้นตอนการ Deploy โปรเจคนี้

### 1. เตรียมไฟล์ .env
- ตรวจสอบและแก้ไขไฟล์ `.env` ในแต่ละโฟลเดอร์ (เช่น `client/.env`, `backend/.env`)
- ตัวอย่างไฟล์ `client/.env`:

```env
REACT_APP_API_URL=https://rcn-api-url.com
REACT_APP_ENV=production
REACT_APP_SECRET_KEY=rcn-secret-key
```

### 2. Deploy ฝั่ง Frontend (React) ขึ้น Vercel
1. สมัครและล็อกอินที่ [Vercel](https://vercel.com)
2. เชื่อมต่อกับ GitHub/GitLab/Bitbucket หรืออัปโหลดโปรเจคด้วย Vercel CLI
3. เลือกโฟลเดอร์ `client` เป็นโปรเจค React
4. ตั้งค่า Environment Variables ในหน้า Settings ของโปรเจค Vercel ให้ตรงกับไฟล์ `.env`
5. กด Deploy หรือ push code ขึ้น repository ที่เชื่อมกับ Vercel

### 3. Deploy ฝั่ง Backend (Express)
- Vercel ไม่เหมาะกับ Express backend แบบเต็มตัว
- แนะนำ deploy backend บนบริการอื่น เช่น [Render](https://render.com), [Railway](https://railway.app), หรือ [Heroku](https://heroku.com)
- ตั้งค่า Environment Variables ในบริการนั้นให้ตรงกับไฟล์ `.env`

### 4. ตรวจสอบการเชื่อมต่อ
- ให้แน่ใจว่า `REACT_APP_API_URL` ใน client ชี้ไปยัง URL ของ backend ที่ deploy แล้ว
- ทดสอบการเรียก API จาก frontend ไป backend

### 5. ข้อควรระวัง
- อย่า push ไฟล์ `.env` และโฟลเดอร์ `node_modules` ขึ้น git (ดูไฟล์ `.gitignore`)
- ตรวจสอบความปลอดภัยของ SECRET KEY และข้อมูลสำคัญ

---

หากมีปัญหาในการ deploy หรือเชื่อมต่อ สามารถตรวจสอบ log ของ Vercel และ backend provider เพื่อแก้ไขข้อผิดพลาด
