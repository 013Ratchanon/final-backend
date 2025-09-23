import { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // ใช้ environment variable สำหรับ backend URL
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

    fetch(`${API_URL}/api/profile`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (!profile)
    return <div style={{ textAlign: "center", marginTop: 50 }}>Loading...</div>;

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 700,
        margin: "50px auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#C0C0C0",
        borderRadius: 15,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>👤 ประวัติส่วนตัว</h1>

      <div style={{ marginTop: 30 }}>
        <p>
          <b>ชื่อ:</b> {profile.name}
        </p>
        <p>
          <b>ชื่อเล่น:</b> {profile.nickname}
        </p>
        <p>
          <b>วันเกิด:</b> {profile.birthday}
        </p>
        <p>
          <b>การศึกษา:</b> {profile.education}
        </p>
        <p>
          <b>ตำแหน่ง:</b> {profile.role}
        </p>
        <p>
          <b>ทักษะ:</b> {profile.skills.join(", ")}
        </p>
        <p>
          <b>งานอดิเรก:</b> {profile.hobbies.join(", ")}
        </p>
      </div>

      <div style={{ marginTop: 30 }}>
        <h3
          style={{
            borderBottom: "2px solid #4fc3f7",
            display: "inline-block",
            paddingBottom: 5,
          }}
        >
          ติดต่อ
        </h3>
        <ul style={{ listStyle: "none", padding: 0, marginTop: 10 }}>
          <li>
            📧 Email:{" "}
            <a
              href={`mailto:${profile.contact.email}`}
              style={{ color: "#4fc3f7" }}
            >
              {profile.contact.email}
            </a>
          </li>
          <li>
            💻 GitHub:{" "}
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4fc3f7" }}
            >
              {profile.contact.github}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
