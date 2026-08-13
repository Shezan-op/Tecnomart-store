"use client";
import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.navHeader} onClick={toggleMenu}>
        <h1 className="site-title">TECNOMART</h1>
        <svg 
          className={styles.chevron}
          width="20" height="20" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div className={styles.navMenuWrapper}>
        <ul className={styles.navMenu}>
          <li><a href="#laptops">Laptops</a></li>
          <li><a href="#mobiles">Mobiles</a></li>
          <li><a href="#accessories">Accessories</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}
