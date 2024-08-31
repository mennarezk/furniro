import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hideMenu, setHideMenu] = useState(false);
  const navigate = useNavigate();
  const mobileMenuRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setHideMenu(true); // Scrolling down
      } else {
        setHideMenu(false); // Scrolling up
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };
 
  const handleLogoClick = () => {
    navigate('/');
  };
 
  return (
    <nav className={hideMenu ? 'hide-menu' : ''}>
      <div className="fristDiv">
        <div className="logo">
          <img src="src/assets/Logoo.png" alt="Furniro Logo" onClick={handleLogoClick} />
          <h2>Furniro</h2>
        </div>
        <div className={`links ${isMenuOpen ? 'hide' : ''}`}>
          <Link className='link' to="/home">Home</Link>
          <Link className='link' to="/shop">Shop</Link>
          <Link className='link' to="/about">About</Link>
          <Link className='link' to="/contact">Contact</Link>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faHeart}/>
          <FontAwesomeIcon 
            icon={faShoppingCart} 
            onClick={handleCartClick} 
          />
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`} ref={mobileMenuRef}>
        <Link className='link' to="home" onClick={toggleMenu}>Home</Link>
        <Link className='link' to="/shop" onClick={toggleMenu}>Shop</Link>
        <Link className='link' to="/about" onClick={toggleMenu}>About</Link>
        <Link className='link' to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
