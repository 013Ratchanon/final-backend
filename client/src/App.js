import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";

function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: 50,
        color: "#fff",
      }}
    >
      <h1>👋 แนะนำตัว</h1>
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
        <b>ทักษะ:</b> {profile.skills.join(", ")}
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ padding: 10, background: "#1e1e1e", color: "#fff" }}>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
