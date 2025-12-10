import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddIdea from "./pages/AddIdea.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
import AddNew from "./pages/AddNew";
import AllIdeas from "./pages/AllIdeas.jsx";
import MyIdeas from "./pages/MyIdeas.jsx";
import Profile from "./pages/Profile.jsx";
import Logout from "./pages/Logout.jsx";
import Footer from "./components/Footer.jsx";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route 
            path="/dashboard" 
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            } 
          />

          <Route 
            path="/add-idea" 
            element={
              <RequireAuth>
                <AddIdea />
              </RequireAuth>
            } 
          />

          <Route 
            path="/add-new" 
            element={
              <RequireAuth>
                <AddNew />
              </RequireAuth>
            } 
          />

          <Route 
            path="/all-ideas" 
            element={
              <RequireAuth>
                <AllIdeas />
              </RequireAuth>
            } 
          />

          <Route 
            path="/profile" 
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            } 
          />
          <Route path="/my-ideas" element={
            <RequireAuth>
              <MyIdeas />
            </RequireAuth>
          } />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
