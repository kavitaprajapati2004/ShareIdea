import React, { useEffect, useState } from "react";
import IdeaCard from "../components/IdeaCard.jsx";
import { useNavigate } from "react-router-dom";

export default function AllIdeas() {
  const [ideas, setIdeas] = useState([]);
  const navigate = useNavigate();

  const loadIdeas = () => {
    const savedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
    setIdeas(savedIdeas);
  };

  useEffect(() => {
    loadIdeas();
  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "8px 15px",
          background: "#333",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        ⬅ Back
      </button>

      <h1 style={{ textAlign: "center" }}>All Ideas</h1>

      {ideas.length === 0 ? (
        <p>No ideas found</p>
      ) : (
        ideas.map((idea) => (
          <IdeaCard
            key={idea.id}
            idea={idea}
          />
        ))
      )}
    </div>
  );
}
