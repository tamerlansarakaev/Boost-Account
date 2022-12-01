// Global
import React from 'react';

// Styles
import './Input.less';

function Input({ onChange, className, type, value, required }) {
  return (
    <input
      type={type || 'text'}
      onChange={(e) => onChange(e.target.value)}
      value={value}
      required={required || false}
      className={className}
    />
  );
}

export default Input;
