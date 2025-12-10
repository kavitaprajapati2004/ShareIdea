import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {

  if (!fullName || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const userData = {
    fullName,
    email,
    password,
  };

  localStorage.setItem("currentUser", JSON.stringify(userData));

  alert("Account created successfully!");
  navigate("/dashboard");
};


  return (
    <div className="signup-container">

      <div className="left-side">
        <h1>Join the community of creators and innovators</h1>
      </div>

      <div className="right-side">
        <div className="signup-box">
          <h2>Signup</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="signup-btn" onClick={handleSignup}>
            Create Account
          </button>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>

    </div>
  );
}
