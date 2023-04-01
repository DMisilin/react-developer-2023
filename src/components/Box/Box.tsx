import React from 'react';
import './Box.css';

const Box = ({ point, order }) => {
  const classes = ['zero', 'first', 'second', 'third', 'fourth', 'fifth'];

  return (
    <div className={`box ${classes[point]}`} id={order} role="Box">
      {point}
    </div>
  );
};

export default Box;
