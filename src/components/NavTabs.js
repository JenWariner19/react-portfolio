import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  const styles = {
    navtabs: {
      color: "white",
      backgroundColor: "black",
      margin: "5px",
      display: "flex",
      fontFamily: "Open Sans"
    },
    navalign: {
      justifyContent: "flex-end"
    }
  };

  return (
    <ul className="nav nav-tabs" style={styles.navalign}>
      <li className="nav-item">
        <a
          style={styles.navtabs}
          href="#aboutme"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.navtabs}
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.navtabs}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.navtabs}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;