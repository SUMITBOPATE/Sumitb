import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="Go to homepage">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="logo-icon"
          >
            <path d="M16 4L12 10H20L16 4Z" fill="currentColor" />
            <ellipse cx="16" cy="20" rx="8" ry="6" fill="currentColor" />
            <rect x="14" y="14" width="4" height="8" fill="currentColor" />
          </svg>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
          
          <Link to="/experiments" className="resume-button">
            <span>Experiments</span>
            <svg
              className="arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;