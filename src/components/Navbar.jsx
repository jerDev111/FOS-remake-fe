import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <h2 className="brand">NinjaBite</h2>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Food">Food</Link>
          <Link to="/Cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
