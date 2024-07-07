import { useState, useEffect, useRef } from 'react';

import NavbarList from '../NavbarList/NavbarList';
import ThemeSwither from '../ThemeSwither/ThemeSwither';

import './Navbar.css';

function Navbar() {
  const [listShouldBeVisibility, setListShouldBeVisibility] = useState(true);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const navRef: any = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (navRef.current && navRef.current.offsetWidth <= 1000) {
        setListShouldBeVisibility(false);
      } else {
        setListShouldBeVisibility(true);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function toggleFlagToShowNavbarList() {
    setListShouldBeVisibility(!listShouldBeVisibility);
  }

  return (
    <nav ref={navRef} className={`navbar ${isNavbarFixed ? 'fixed' : ''}`}>
      <i
        className="menu-icon fa-solid fa-bars"
        onClick={toggleFlagToShowNavbarList}
      ></i>
      {listShouldBeVisibility && <NavbarList />}
      <ThemeSwither />
    </nav>
  );
}

export default Navbar;
