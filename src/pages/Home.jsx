import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-left">
        <h1>Turn Your Ideas Into Reality</h1>
        <p>Share, Learn and Build Together with Students</p>
        <Link to="/dashboard">
          <button className="get-started">Get Started</button>
        </Link>
      </div>

      <div className="hero-right">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7011/7011838.png"
          alt="illustration"
        />
      </div>
    </div>
  );
}
