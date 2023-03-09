import React from 'react';

// Components
import FooterLinks from './FooterLinks/FooterLinks';
import FooterLogo from './FooterLogo/FooterLogo';
import FooterMessengers from './FooterMessengers/FooterMessengers';

// Styles
import './Footer.less';

// Footer component that displays links, a logo, and messengers
class Footer extends React.Component {
  // Render the links, logo, and messengers
  render() {
    return (
      <React.Fragment>
        <div className="footer-container">
          <div className="footer-elements">
            <FooterLinks />
            <FooterLogo />
            <FooterMessengers />
          </div>
          <p className="footer-subtitle">
            (с) World of Warcraft, WoW, Overwatch, Hearthstone,Heroes of the
            Storm, Diablo 3 and Blizzard Entertainment are registered trademarks
            of Blizzard Entertainment Inc DESTY 2 is registrerd tragemark of
            BUNGIE INC.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
