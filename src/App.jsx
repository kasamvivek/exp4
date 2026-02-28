import Reports from "./pages/Reports";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Analytics from "./pages/Analytics";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { theme } = useContext(AppContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#f4f6f8" : "#121212",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  };

  return (
    <div style={appStyle}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;