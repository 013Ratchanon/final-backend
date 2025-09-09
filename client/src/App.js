import { useEffect, useState } from "react";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (!profile)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#1e1e1e",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Loading...
      </div>
    );

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "30px",
          borderRadius: "16px",
          backgroundColor: "#1e1e1e",
          boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
          color: "#fff",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          👋 แนะนำตัว
        </h1>

        <p>
          <b>ชื่อจริง:</b> {profile.name}
        </p>
        <p>
          <b>ชื่อเล่น:</b> {profile.nickname}
        </p>
        <p>
          <b>ตำแหน่ง:</b> {profile.role}
        </p>
        <p>
          <b>ทักษะ:</b> {profile.skills?.join(", ")}
        </p>

        <p style={{ marginTop: "20px" }}>
          <b>ติดต่อ:</b>
        </p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            Email:{" "}
            <a
              href={`mailto:${profile.contact?.email}`}
              style={{ color: "#4fc3f7" }}
            >
              {profile.contact?.email}
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href={profile.contact?.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4fc3f7" }}
            >
              {profile.contact?.github}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
