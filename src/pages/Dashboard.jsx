import "../styles/Dashboard.css";
import IdeaCard from "../components/IdeaCard";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard-container">

      <aside className="sidebar">
        <h3>Menu</h3>
        <Link to="/all-ideas"><p>All Ideas</p></Link>
        <Link to="/my-ideas"><p>My Ideas</p></Link>
        <Link to="/addidea"><p>Add New</p></Link>
        <Link to="/profile"><p>Profile</p></Link>
        <Link to="/logout"><p>Logout</p></Link>
      </aside>

      <main className="feed">
        <IdeaCard />
        <IdeaCard />
      </main>

      <aside className="rightbar">
        <h3>Trending Ideas</h3>
        <p onClick={() => alert("You clicked Idea 1!")}>Idea 1</p>
        <p onClick={() => alert("You clicked Idea 2!")}>Idea 2</p>
      </aside>
      
    </div>
  );
}
