import React, { useState } from "react";
import "../styles/card.css";

export default function IdeaCard() {
  const [likes, setLikes] = useState(0); // Like count
  const [title, setTitle] = useState("Innovative AI Assistant");
  const [description, setDescription] = useState(
    "A smart assistant built for learning and creativity."
  );
  const [isVisible, setIsVisible] = useState(true); // Card visibility

  if (!isVisible) return null; // Delete button clicked

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    const comment = prompt("Enter your comment:");
    if (comment) {
      alert(`You commented: ${comment}`);
    }
  };

  const handleEdit = () => {
    const newTitle = prompt("Edit title:", title);
    const newDescription = prompt("Edit description:", description);
    if (newTitle) setTitle(newTitle);
    if (newDescription) setDescription(newDescription);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this idea?")) {
      setIsVisible(false);
    }
  };

  return (
    <div className="idea-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tags">
        <span>#AI</span>
        <span>#Tech</span>
      </div>

      <div className="actions">
        <button className="like" onClick={handleLike}>
          Like ({likes})
        </button>
        <button className="comment" onClick={handleComment}>
          Comment
        </button>
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
