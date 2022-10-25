// Global
import React from 'react';

// Styles
import './Input.less';

function Input({ onChange, className, type, value }) {
  return (
    <input
      type={type || 'text'}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className={className}
    />
  );
}

export default Input;
