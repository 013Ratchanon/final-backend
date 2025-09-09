import express from "express";
import cors from "cors"; // ✅ import cors
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS
app.use(cors()); // อนุญาตทุก origin
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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
