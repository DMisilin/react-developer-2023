import React from 'react';
import './Floor.css';
import Box from '../Box/Box';

const Floor = ({ groundType }) => {
  const boxes = [0, 0, 1, 2, 0, 1, 1, 2, 3].map((elm) => <Box key={elm} point={elm} />);
  return <div className={groundType}>{boxes}</div>;
};

export default Floor;
