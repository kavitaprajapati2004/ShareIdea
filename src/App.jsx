import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddIdea from "./pages/AddIdea.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-idea" element={<AddIdea />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
