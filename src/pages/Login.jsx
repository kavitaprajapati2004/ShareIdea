import "../styles/Login.css";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="login-container">
      
      {/* LEFT SIDE */}
      <div className="left-side">
        <h1>Every big idea starts with a small step</h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-side">
        <div className="login-box">
          <h2>Login</h2>

          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />

          <button className="login-btn">Login</button>

          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>

    </div>
  );
}
