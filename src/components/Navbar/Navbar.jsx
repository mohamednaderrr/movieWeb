import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setMovieType }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    if (activeLink === link) {
      // إذا كان الرابط نفسه هو النشط، نقوم بإزالته
      setActiveLink(null);
      setMovieType(null); // إلغاء اختيار نوع الفيلم
    } else {
      // إذا كان رابط جديد، نحدد الرابط الجديد
      setActiveLink(link);
      setMovieType(link); // تعيين نوع الفيلم بناءً على الرابط
    }
  };

  return (
    <nav className="navbar">
      <h1>Movies</h1>
      <div className="navbar_links">
        <a
          href="#"
          className={activeLink === 'popular' ? 'active' : ''}
          onClick={() => handleLinkClick('popular')}
        >
          Popular
        </a>
        <a
          href="#"
          className={activeLink === 'topRated' ? 'active' : ''}
          onClick={() => handleLinkClick('topRated')}
        >
          Top Rated
        </a>
        <a
          href="#"
          className={activeLink === 'upcoming' ? 'active' : ''}
          onClick={() => handleLinkClick('upcoming')}
        >
          Upcoming
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
