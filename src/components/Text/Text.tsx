import React from 'react';
import './Text.css';

const Text = ({ text, size, border }) => {
  return (
    <p className={`${size} ${border}`} role="Text">
      {text}
    </p>
  );
};

export default Text;
