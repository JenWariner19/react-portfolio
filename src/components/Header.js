import React, {useState} from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function Header() {
  const styles = {
    header: {
      padding: "20px",
      backgroundColor: "#2874a6",
      color: "white",
      borderBottom: "5px solid black",
      marginBottom: "3px"
    },
    h1: {
      margin: 0
    }
  };
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.header}>
      <h1 style={styles.h1}>Jennifer Wariner</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}