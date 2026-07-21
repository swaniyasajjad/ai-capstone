import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.trim() === "" || email.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }

    alert(`
Settings Saved Successfully!

Name: ${fullName}
Email: ${email}
Theme: ${theme}
Language: ${language}
Notifications: ${notifications ? "Enabled" : "Disabled"}
    `);
  };

  return (
    <div className="App">
      <form className="settings-form" onSubmit={handleSubmit}>
        <h1>⚙️ Settings</h1>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option>Light</option>
          <option>Dark</option>
          <option>System Default</option>
        </select>

        <label>Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Urdu</option>
          <option>Arabic</option>
        </select>

        <div className="checkbox">
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          <span>Enable Notifications</span>
        </div>

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default App;