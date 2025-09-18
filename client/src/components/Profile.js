import { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 600,
        margin: "0 auto",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>👤 ประวัติส่วนตัว</h1>
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
      <p>
        <b>ติดต่อ:</b>
      </p>
      <ul>
        <li>
          Email:{" "}
          <a
            href={`mailto:${profile.contact.email}`}
            style={{ color: "#4fc3f7" }}
          >
            {profile.contact.email}
          </a>
        </li>
        <li>
          GitHub:{" "}
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
  );
}
