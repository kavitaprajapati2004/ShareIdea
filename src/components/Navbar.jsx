import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">IdeaShare</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Explore</Link>
        <Link to="/add-idea" className="add-btn">Add Idea</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
