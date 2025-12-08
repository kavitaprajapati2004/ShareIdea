import "../styles/Signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="signup-container">

      {/* LEFT */}
      <div className="left-side">
        <h1>Join the community of creators and innovators</h1>
      </div>

      {/* RIGHT */}
      <div className="right-side">
        <div className="signup-box">
          <h2>Signup</h2>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <input type="password" placeholder="Confirm Password" />

          <button className="signup-btn">Create Account</button>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>

    </div>
  );
}
