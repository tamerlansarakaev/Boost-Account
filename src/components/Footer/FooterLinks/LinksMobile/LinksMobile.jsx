// Global
import React from 'react';

// Styles
import './LinksMobile.less';

function LinksMobile() {
  return (
    <ul className="footer-links">
      <div className="first-column">
        <li className="links">FAQ</li>
        <li className="links">Reviews</li>
        <li className="links">License Agreement</li>
      </div>
      <div className="second-column">
        <li className="links">Contact us</li>
        <li className="links">Account security</li>
        <li className="links">Refunding policy</li>
      </div>
    </ul>
  );
}
export default LinksMobile;
