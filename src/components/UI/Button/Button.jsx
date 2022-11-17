// Global
import React from 'react';

// Styles
import './Button.less';

const Button = ({ content, onClick, classButton, disabled }) => {
  return (
    <button
      onClick={(e) => onClick(e) || ''}
      className={`button${classButton ? ' ' + classButton : ''}`}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
