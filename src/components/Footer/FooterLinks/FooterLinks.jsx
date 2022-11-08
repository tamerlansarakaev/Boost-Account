// Global
import React from 'react';

// Components
import LinksMobile from './LinksMobile/LinksMobile';

// Styles
import './FooterLinks.less';

function FooterLinks() {
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <>
      {isMobile ? (
        <LinksMobile />
      ) : (
        <ul className="footer-links">
          <li className="links">FAQ</li>
          <li className="links">Reviews</li>
          <li className="links">License Agreement</li>
          <li className="links">Contact us</li>
          <li className="links">Account security</li>
          <li className="links">Refunding policy</li>
        </ul>
      )}
    </>
  );
}

export default FooterLinks;
