// Global
import React from 'react';
import { useSelector } from 'react-redux';
import HeaderNavItem from '../HeaderNavItem/HeaderNavItem';

// UI

// Styles
import './HeaderNav.less';

const HeaderNav = () => {
  const links = useSelector((state) => state.links);
  return (
    <div className="Header__Nav">
      <div className="header-links">
        {links &&
          links.map((state, i) => {
            return <HeaderNavItem name={state.name} src={state.src} key={i} />;
          })}
      </div>
    </div>
  );
};

export default HeaderNav;
