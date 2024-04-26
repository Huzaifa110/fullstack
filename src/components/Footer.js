import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 mt-5 bg-danger">
      <div className="container text-center">
        <span className="text-white fs-5">© {new Date().getFullYear()} Food. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
