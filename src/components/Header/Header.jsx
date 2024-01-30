// Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      /*Checks if its a phone or tablet */
      setIsMobile(window.innerWidth < 820);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMobileMenuChange = (event) => {
    const selectedPath = event.target.value;
    navigate(selectedPath);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <img src="/images/bannder2.png" alt="Header Image" className="header-image" />
        <nav>
          {isMobile ? (
            <div className="mobile-menu">
              <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </div>
              {isMenuOpen && (
                <div className="menu-options">
                  <NavLink to="/" activeClassName="active" exact onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                  <NavLink to="/team" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Our Team</NavLink>
                  <NavLink to="/poetry" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Poetry</NavLink>
                  <NavLink to="/short-stories" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Short Stories</NavLink>
                </div>
              )}
            </div>
          ) : (
            <h5>
            <ul className="isotope-menu">
              <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
              <li><NavLink to="/team" activeClassName="active">Our Team</NavLink></li>
              <li><NavLink to="/poetry" activeClassName="active">Poetry</NavLink></li>
              <li><NavLink to="/short-stories" activeClassName="active">Short Stories</NavLink></li>
            </ul>
            </h5>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
