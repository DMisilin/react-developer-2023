import React from 'react';
import './Text.css';

const Text = ({ text, size }) => {
  return (
    <p className={size} role="Text">
      {text}
    </p>
  );
};

export default Text;
