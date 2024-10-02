import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <h1>Logo</h1>
      <ul>
        <li><a href="#heroSec">Home</a></li>
        <li className="dropdown">
          <a href="#whatsMore">What's More ▼</a>
          <ul className="dropdown-content">
            <li><a href="#whatsMore">What is Web Development?</a></li>
            <li><a href="#keyAspects">Types of Web Development</a></li>
            <li><a href="#Importance">Importance of Web Development</a></li>
            <li><a href="#History">History of Web Development</a></li>
          </ul>
        </li>
        <li><a href="#Contacts">Contacts</a></li>
      </ul>
    </header>
  );
};

export default Nav;
