import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {

      const newUser = { email, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
      return;
    }

    savedUser.email = email;
    savedUser.password = password;

    localStorage.setItem("user", JSON.stringify(savedUser));
    localStorage.setItem("currentUser", JSON.stringify(savedUser));
    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <h1>Every big idea starts with a small step</h1>
      </div>

      <div className="right-side">
        <div className="login-box">
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-Btn" onClick={handleLogin}>
            Login
          </button>

          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
