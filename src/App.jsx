import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <nav style={{
          background: "#111",
          padding: "15px",
          display: "flex",
          gap: "20px"
        }}>
          <Link style={{color:"white", textDecoration:"none"}} to="/">Home</Link>
          <Link style={{color:"white", textDecoration:"none"}} to="/gallery">Gallery</Link>
          <Link style={{color:"white", textDecoration:"none"}} to="/login">Login</Link>
        </nav>

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;