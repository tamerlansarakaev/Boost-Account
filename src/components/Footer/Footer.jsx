// Global
import React from 'react';

// Components

// UI

// Styles
import './Footer.less';
import FooterLinks from './FooterLinks/FooterLinks';
import FooterLogo from './FooterLogo/FooterLogo';
import FooterMessengers from './FooterMessengers/FooterMessengers';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-elements">
          <FooterLinks />
          <FooterLogo />
          <FooterMessengers />
        </div>
        <p className="footer-subtitle">
          (с) World of Warcraft, WoW, Overwatch, Hearthstone,Heroes of the
          Storm, Diablo 3 and Blizzard Entertainment are registered trademarks
          of Blizzard Entertainment Inc DESTINY 2 is registrerd tragemark of
          BUNGIE INC.
        </p>
      </div>
    </div>
  );
}

export default Footer;
