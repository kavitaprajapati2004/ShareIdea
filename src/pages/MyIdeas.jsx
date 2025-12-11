import React, { useEffect, useState } from "react";
import "../styles/MyIdeas.css";
import { useNavigate } from "react-router-dom";
import IdeaCard from "../components/IdeaCard";

export default function MyIdeas() {
  const [ideas, setIdeas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
    setIdeas(storedIdeas);
  }, []);

  const handleDelete = (id) => {
    const updatedIdeas = ideas.filter((idea) => idea.id !== id);
    setIdeas(updatedIdeas);
    localStorage.setItem("ideas", JSON.stringify(updatedIdeas));
  };

  return (
    <>
      <div className="back-wrapper">
        <button className="back" onClick={() => navigate(-1)}>⬅ Back</button>
      </div>

      <div className="my-ideas-container">
        <h1>My Ideas</h1>

        {ideas.length === 0 ? (
          <p className="no-ideas">No ideas added yet!</p>
        ) : (
          <div className="ideas-grid">
            {ideas.map((idea) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
