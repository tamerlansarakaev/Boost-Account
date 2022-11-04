// Global
import React from 'react';
import { ReactSVG } from 'react-svg';

// Components
import AboutUsItem from './AboutUsItem/AboutUsItem';

// UI

// Styles
import './AboutUs.less';

function AboutUs() {
  console.log(require('../../UI/icons/HandPointing.svg').default);

  return (
    <div className="about-us">
      <div className="about-us-header">
        <ReactSVG
          src={require('../../UI/icons/quession.svg').default}
          className={'about-us-header-icon'}
        />
        <div className="about-us-header-title">
          <h1 className="about-us-title">How to place an order</h1>
          <p className="about-us-subtitle">
            Our site nice-boost.com can help with leveling in World of Warcraft
          </p>
        </div>
      </div>
      <div className="about-us-list">
        <AboutUsItem />
      </div>
    </div>
  );
}

export default AboutUs;
