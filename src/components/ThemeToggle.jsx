import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Nav } from "react-bootstrap";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <Nav.Link onClick={toggleTheme}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </Nav.Link>
  );
}

export default ThemeToggle;