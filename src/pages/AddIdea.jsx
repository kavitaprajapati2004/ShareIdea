import "../styles/AddIdea.css";
export default function AddIdea() {
  return (
    <div className="form-container">
      <h2>Add a New Idea</h2>

      <input type="text" placeholder="Idea Title" />
      <textarea placeholder="Idea Description"></textarea>
      <input type="text" placeholder="Tags (comma separated)" />
      
      <select>
        <option>Select Category</option>
        <option>Tech</option>
        <option>Education</option>
        <option>Health</option>
      </select>

      <button className="submit-btn">Submit Idea</button>
    </div>
  );
}
