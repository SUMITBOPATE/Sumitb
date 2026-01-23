
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="Home">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-icon"
          >
            <path d="M16 4L12 10H20L16 4Z" fill="currentColor" />
            <ellipse cx="16" cy="20" rx="8" ry="6" fill="currentColor" />
            <rect x="14" y="14" width="4" height="8" fill="currentColor" />
          </svg>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/experiments" className="resume-button">
            <span>Experiments </span>
            <svg
              className="arrow-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;