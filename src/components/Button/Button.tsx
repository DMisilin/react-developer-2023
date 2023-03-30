import React from 'react';
import './Button.css';

const Button = ({ text = 'click', type = 'default', onClick }) => {
  return (
    <button type="button" className={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
