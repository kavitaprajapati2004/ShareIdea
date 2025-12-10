import React, { useEffect, useState } from "react";
import IdeaCard from "../components/IdeaCard.jsx";

export default function AllIdeas() {
  const [ideas, setIdeas] = useState([]);

  const loadIdeas = () => {
    const savedIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
    setIdeas(savedIdeas);
  };

  useEffect(() => {
    loadIdeas();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{textAlign:"center"}}>All Ideas</h1>

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
