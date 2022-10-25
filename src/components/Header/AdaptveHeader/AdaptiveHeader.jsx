import React from 'react';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import RegionList from '../../RegionList/RegionList';

// Components
import Cart from '../../UI/Cart/Cart';
import LogoSite from '../../UI/Logo/Logo';
import Menu from '../../UI/Menu/Menu';

// UI

// STyles
import './AdaptiveHeader.less';

function AdaptiveHeader() {
  return (
    <div className="Adaptive-Header">
      <div className="Adaptive-Header-Items">
        <RegionList />
      </div>
      <div className="Adaptive-Header-Items">
        <LogoSite />
      </div>
      <div className="Adaptive-Header-Items">
        <Cart />
        <Menu />
      </div>
    </div>
  );
}

export default AdaptiveHeader;
