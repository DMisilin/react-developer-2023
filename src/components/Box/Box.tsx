import React from 'react';
import './Box.css';

const Box = ({ point = 0 }) => {
  const classes = ['zero', 'first', 'second', 'third'];
  console.log(`box ${classes[point]}`);

  return <div className={`box ${classes[point]}`}>{point}</div>;
};

export default Box;
