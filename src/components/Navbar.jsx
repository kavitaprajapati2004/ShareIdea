import "../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    navigate("/");
  };

  const isLoggedIn = localStorage.getItem("currentUser");

  return (
    <nav className="navbar">
      <h2 className="logo">IdeaShare</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/dashboard">Explore</Link>
        <Link to="/add-idea" className="add-btn">Add Idea</Link>
        {!isLoggedIn && <Link to="/login" className="login-btn">Login</Link>}

        {isLoggedIn && (
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
