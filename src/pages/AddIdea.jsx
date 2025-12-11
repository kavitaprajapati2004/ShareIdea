import "../styles/AddIdea.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddIdea() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title || !desc) {
      alert("Please fill all fields!");
      return;
    }

    const newIdea = {
      id: Date.now(),
      title,
      description: desc,
      tags: tags.split(",").map((tag) => tag.trim()),
      category,
      likes: 0,
    };

    const oldIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
    oldIdeas.push(newIdea);
    localStorage.setItem("ideas", JSON.stringify(oldIdeas));

    navigate("/dashboard");
  };

  return (
    <div className="form-page">

     <div className="back-wrapper">
        <button className="back" onClick={() => navigate(-1)}>⬅ Back</button>
      </div>

      <div className="form-container">
        <h2 style={{textAlign:'center'}}>Add a New Idea</h2>

        <input
          type="text"
          placeholder="Idea Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Idea Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Tech">Tech</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Sport">Sport</option>
          <option value="Other">Other</option>
        </select>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit Idea
        </button>
      </div>
    </div>
  );
}
