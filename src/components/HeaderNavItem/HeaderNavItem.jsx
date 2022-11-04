import React from 'react';

// Styles
import './HeaderNavItem.less';

function HeaderNavItem(props) {
  return <li className="title-nav">{props.name}</li>;
}

export default HeaderNavItem;
