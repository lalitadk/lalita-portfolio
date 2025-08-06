import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Copyright © {new Date().getFullYear()} Lalita Kshirsagar. All rights reserved.</p>
        {/* <div className="footer-links">
          <a href="https://www.linkedin.com/in/lalita-kshirsagar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/lalitakshirsagar" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:lalitakshirsagar22@gmail.com">Email</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
