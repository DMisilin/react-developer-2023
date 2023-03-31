import React, { useState } from 'react';
import './Floor.css';
import Box from '../Box/Box';
import Button from '../../components/Button/Button';

const Floor = ({ groundType }) => {
  const [isLeft, setIsLeft] = useState(true);

  const updateArr = (position: 'left' | 'right') => {
    if ((position === 'left' && !isLeft) || (position === 'right' && isLeft)) {
      console.warn('Not your move');
      return arr;
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const elm = arr[i];
      result.push(elm + Math.floor(Math.random() * 2));
    }

    setTimeout(() => {
      if (result.find((elm) => elm >= 5)) {
        alert(`Player ${isLeft ? 'LEFT' : 'RIGHT'} win!`);
      }
    }, 100);

    setIsLeft(!isLeft);
    return result;
  };

  const initArr = () => {
    const result = [];
    for (let i = 0; i < 9; i++) {
      result.push(Math.floor(Math.random() * 3));
    }
    return result;
  };

  const [arr, setArr] = useState(initArr());

  const renderBoxes = () => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      result.push(<Box key={i} point={num} order={i} />);
    }
    return result;
  };

  return (
    <div className="buttonPanel">
      <div className="playerButton">
        <Button
          text="left"
          type="eco"
          onClick={() => setArr(updateArr('left'))}
        ></Button>
      </div>
      <div className={`floor ${groundType}`}>{renderBoxes()}</div>
      <div className="playerButton">
        <Button
          text="right"
          type="eco"
          onClick={() => setArr(updateArr('right'))}
        ></Button>
      </div>
      <div className="cleanButton">
        <Button
          text="rebuild"
          type="blue"
          onClick={() => setArr(initArr())}
        ></Button>
      </div>
    </div>
  );
};

export default Floor;
