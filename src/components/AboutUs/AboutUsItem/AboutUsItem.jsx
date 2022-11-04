// Global
import React from 'react';
import { ReactSVG } from 'react-svg';

// Styles
import './AboutUsItem.less';

function AboutUsItem({ src, title }) {
  return (
    <div className="about-us-item">
      <ReactSVG
        className="background-svg"
        src={require('../../../UI/icons/monitor.svg')}
      />
      <div className="about-main">
        {src && <ReactSVG src={require(src)} />}
        <p className="title">{title ? title : 'RandomText)'}</p>
      </div>
    </div>
  );
}

export default AboutUsItem;
