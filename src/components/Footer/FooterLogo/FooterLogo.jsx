// Global
import React from 'react';
import { ReactSVG } from 'react-svg';

// Components
import LogoSite from '../../UI/Logo/Logo';

// Styles
import './FooterLogo.less';

function FooterLogo() {
  return (
    <div className="footer-logo">
      <LogoSite />
      <div className="reviews-footer">
        <div className="reviews-footer-container">
          <button className="footer-reviews-show-rate">
            <p className="footer-reviews-rate">Rated 5 Stars on</p>
            <ReactSVG
              src={require('../../../UI/icons/Trustpilot.svg').default}
              className="footer-reviews-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterLogo;
