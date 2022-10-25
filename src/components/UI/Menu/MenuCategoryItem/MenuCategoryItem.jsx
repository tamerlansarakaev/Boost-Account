// Global
import classNames from 'classnames';
import React from 'react';
import { ReactSVG } from 'react-svg';
// Styles
import './MenuCategoryItem.less';

function MenuCategoryItem({ onClick, activeMenuCategory, ...props }) {
  const className = classNames({ MenuItem: true, activeMenuCategory });
  return (
    <div className={className} onClick={(e) => onClick(props.title)}>
      <ReactSVG
        className="Svg-Menu-Item"
        src={require(`./categories/${props.image}.svg`)}
      />
      <p className='title-menu-category'>{props.title}</p>
    </div>
  );
}

export default MenuCategoryItem;
