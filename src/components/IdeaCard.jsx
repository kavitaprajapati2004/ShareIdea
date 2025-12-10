import React, { useState, useEffect } from "react";
import "../styles/card.css";

export default function IdeaCard({ idea, refreshIdeas }) {

  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  let storedAnon = localStorage.getItem("anonId");
  if (!storedAnon) {
    storedAnon =
      "anon_" +
      Date.now() +
      "_" +
      Math.random().toString(36).slice(2, 8);

    localStorage.setItem("anonId", storedAnon);
  }

  const userId = loggedUser?.email || storedAnon;

  const [likes, setLikes] = useState(idea.likes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState(idea.comments || []);

  useEffect(() => {
    const likedBy = idea.likedBy || [];
    setIsLiked(likedBy.includes(userId));
    setLikes(idea.likes || 0);
    setComments(idea.comments || []);
  }, [idea.id]);

  const handleLikeToggle = () => {
    const allIdeas = JSON.parse(localStorage.getItem("ideas")) || [];

    const updated = allIdeas.map((i) => {
      if (i.id === idea.id) {
        const likedBy = Array.isArray(i.likedBy)
          ? [...i.likedBy]
          : [];

        let newLikes = i.likes || 0;

        if (likedBy.includes(userId)) {
          const idx = likedBy.indexOf(userId);
          if (idx !== -1) likedBy.splice(idx, 1);
          newLikes = Math.max(0, newLikes - 1);

          setIsLiked(false);
          setLikes(newLikes);
        } else {
          likedBy.push(userId);
          newLikes = newLikes + 1;

          setIsLiked(true);
          setLikes(newLikes);
        }

        return { ...i, likes: newLikes, likedBy };
      }
      return i;
    });

    localStorage.setItem("ideas", JSON.stringify(updated));
    refreshIdeas();
  };

  const handleAddComment = () => {
    const text = commentInput.trim();
    if (!text) return;

    const newComments = [
      ...comments,
      {
        text,
        user: userId,
      },
    ];

    setComments(newComments);
    setCommentInput("");

    const allIdeas = JSON.parse(localStorage.getItem("ideas")) || [];

    const updated = allIdeas.map((i) =>
      i.id === idea.id ? { ...i, comments: newComments } : i
    );

    localStorage.setItem("ideas", JSON.stringify(updated));
    refreshIdeas();
  };

  const handleEdit = () => {
    const newTitle = prompt("Edit title:", idea.title);
    const newDesc = prompt(
      "Edit description:",
      idea.description
    );

    const allIdeas = JSON.parse(localStorage.getItem("ideas")) || [];

    const updated = allIdeas.map((i) =>
      i.id === idea.id
        ? {
            ...i,
            title: newTitle || i.title,
            description: newDesc || i.description,
          }
        : i
    );

    localStorage.setItem("ideas", JSON.stringify(updated));
    refreshIdeas();
  };

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this idea?"))
      return;

    const allIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
    const newList = allIdeas.filter((i) => i.id !== idea.id);

    localStorage.setItem("ideas", JSON.stringify(newList));
    refreshIdeas();
  };

  return (
    <div className="idea-card">
      <h3>{idea.title}</h3>
      <p>{idea.description}</p>

      <div className="tags">
        {Array.isArray(idea.tags)
          ? idea.tags.map((t, idx) => <span key={idx}>#{t}</span>)
          : typeof idea.tags === "string"
          ? idea.tags
              .split(",")
              .map((t, idx) => <span key={idx}>#{t.trim()}</span>)
          : null}
      </div>

      <p>
        <b>Category:</b> {idea.category}
      </p>

      <div className="actions">
        <button
          className="like"
          onClick={handleLikeToggle}
          style={{
            background: isLiked ? "#1d4ed8" : "#2563eb",
            color: "white",
          }}
        >
          {isLiked ? "Unlike" : "Like"} ({likes})
        </button>

        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>

      <div className="comment-box">
        <input
          type="text"
          placeholder="Write a comment..."
          value={commentInput}
          onChange={(e) =>
            setCommentInput(e.target.value)
          }
        />
        <button onClick={handleAddComment}>Post</button>
      </div>

      {/* UPDATED COMMENT LIST — date/time removed */}
      <div className="comment-list">
        {comments.length === 0 ? (
          <p className="no-comments">No comments yet.</p>
        ) : (
          comments.map((c, i) => (
            <div key={i} className="comment-item">
              <div>{c.text}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}