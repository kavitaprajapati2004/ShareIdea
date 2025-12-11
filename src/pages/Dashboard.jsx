import "../styles/dashboard.css";
import IdeaCard from "../components/IdeaCard.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [ideas, setIdeas] = useState([]);
  const [trending, setTrending] = useState([]);

  const loadIdeas = () => {
    const savedIdeas = JSON.parse(localStorage.getItem("ideas"))||  [];
    setIdeas(savedIdeas);

    const trendingIdeas = [...savedIdeas]
      .sort((a, b) => (b.likes ||0) - (a.likes || 0))
       .slice(0, 3);

    setTrending(trendingIdeas);
  };

  useEffect(() => {
    loadIdeas();
  }, []);

  return (
    <div className="dashboard-container">

     
      <aside className="sidebar">
        <h3>Menu</h3>
        <Link to="/all-ideas"><p>All Ideas</p></Link>
        <Link to="/my-ideas"><p>My Ideas</p></Link>
        <Link to="/add-idea"><p>Add New</p></Link>
        <Link to="/profile"><p>Profile</p></Link>
        <Link to="/logout"><p>Logout</p></Link>
      </aside>

    
      <main className="feed">
        {ideas.length === 0 ? (
          <p>No ideas yet.</p>
        ) : (
          ideas.map((idea) => (
            <IdeaCard
              key={idea.id}
              idea={idea}
              refreshIdeas={loadIdeas}
            />
          ))
        )}
      </main>

     
      <aside className="rightbar">
        <h3>Trending Ideas</h3>
        {trending.length === 0 ? (
          <p>No trending ideas</p>
        ) : (
          trending.map((t) => (
            <p key={t.id} className="trend-item">
              ⭐ {t.title}
            </p>
          ))
        )}
      </aside>
    </div>
  );
}