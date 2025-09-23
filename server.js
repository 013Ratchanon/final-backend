import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
