// Global
import React from 'react';

// Styles
import './Button.less';

const Button = ({ content, onClick, classButton }) => {
  return (
    <button
      onClick={(e) => onClick(e) || ''}
      className={`button${(classButton ? ' ' + classButton : '')}`}
    >
      {content}
    </button>
  );
};

export default Button;
