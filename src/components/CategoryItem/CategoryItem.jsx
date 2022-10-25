import React from 'react';
import classNames from 'classnames';

// Styles
import './CategoryItem.less';

function CategoryItem({ name, onClick, active }) {
  const className = classNames({category: true, active})
  return (
      <div className={className} onClick={() => onClick(name)}>
        <p className='title-category'>{name}</p>
      </div>
  );
}

export default CategoryItem;
