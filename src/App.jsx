import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Index from "./pages/Index";
import RaqmiyaDigest from "./pages/RaqmiyaDigest";
import Subscribe from "./pages/Subscribe";
import Guides from "./pages/Guides"; // Assuming Guides.jsx exists

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/raqmiya-digest" element={<RaqmiyaDigest />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/guides" element={<Guides />} />
      </Routes>
    </Router>
  );
}

export default App;
