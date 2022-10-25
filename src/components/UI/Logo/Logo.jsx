import React from 'react';
import Logo from '../../../UI/header/logo/logo-header.svg';

// Styles
import './Logo.less';

function LogoSite() {
  return <img className="logo" src={Logo} alt="Logo" />;
}

export default LogoSite;
