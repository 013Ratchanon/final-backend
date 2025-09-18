// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// เปิด CORS สำหรับทุก origin
app.use(cors());
app.use(express.json());

// Route แนะนำตัว
app.get("/api/hello", (req, res) => {
  res.json({
    name: "รัชชานนท์ ลี้เจริญ",
    nickname: "เต้",
    role: "Full Stack Developer",
    skills: ["JavaScript", "Node.js", "React", "Express"],
    contact: {
      email: "664259013@webmail.npru.ac.th",
      github: "https://github.com/013Ratchanon",
    },
  });
});

// Route ประวัติส่วนตัว
app.get("/api/profile", (req, res) => {
  res.json({
    name: "รัชชานนท์ ลี้เจริญ",
    nickname: "เต้",
    birthday: "2004-01-01",
    education: "มหาวิทยาลัยราชภัฏนครปฐม",
    role: "Full Stack Developer",
    skills: ["JavaScript", "Node.js", "React", "Express"],
    hobbies: ["อ่านหนังสือ", "เล่นเกม", "พัฒนาเว็บ"],
    contact: {
      email: "664259013@webmail.npru.ac.th",
      github: "https://github.com/013Ratchanon",
    },
  });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
