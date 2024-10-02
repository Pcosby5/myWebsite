import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';  // Import your custom styles

function Header() {
  // State to track menu open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for the saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? true : false;
  });

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Apply dark or light theme class to the body based on state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <header className="container">
      <nav id="header">
        <div className='nav-logo'>
          <p className="nav-name">CosbyThePython!</p>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="myNavMenu">
          <ul className='nav_menu_list'>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav_list active-link' : 'nav_list'}>Home</NavLink>
            </li>
            <li><NavLink to="/projects" className='nav_list'>Projects</NavLink></li>
            <li><NavLink to="/about" className='nav_list'>About</NavLink></li>
            <li><NavLink to="/contact" className='nav_list'>Contact</NavLink></li>
          </ul>
        </div>

        {/* dark mode switch */}
        <div className="mode">
          <button
            className="moon-sun"
            id="toggle-switch"
            onClick={toggleDarkMode}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? (
              <i className="fa fa-sun" id="sun" style={{ color: 'gray' }}></i>
            ) : (
              <i className="fa fa-moon" id="moon" style={{ color: 'gray' }}></i>
            )}
          </button>
        </div>

        <button
          className="nav-menu-btn"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu">
          <i className="uil uil-bars"></i>
        </button>

      </nav>
    </header>
  );
}

export default Header;
