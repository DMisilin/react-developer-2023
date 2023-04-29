import React, { useState } from 'react';
import './Floor.css';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Text from '../Text/Text';

const ARR_LENGTH = 9;

const Floor = ({ groundType = 'yellow', testMode = true }) => {
  const [isLeft, setIsLeft] = useState(true);
  const [arr, setArr] = useState(initArr());

  function initArr() {
    if (testMode) {
      return [0, 1, 2, 3, 4, 5, 4, 3, 2];
    }

    const result = [];
    for (let i = 0; i < ARR_LENGTH; i++) {
      result.push(Math.floor(Math.random() * 3));
    }
    return result;
  }

  // Publish to Score.tsx
  const publish = (eventName, data: { isLeft: boolean }) => {
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
  };

  const updateArr = (position: 'left' | 'right') => {
    if ((position === 'left' && !isLeft) || (position === 'right' && isLeft)) {
      alert(`Not your move`);
      console.error('Not your move');
      return arr;
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const elm = arr[i];
      result.push(elm + Math.floor(Math.random() * 2));
    }

    setTimeout(() => {
      if (result.find((elm) => elm >= 5)) {
        publish('myEvent', { isLeft });
        alert(`Player ${isLeft ? 'LEFT' : 'RIGHT'} win!`);
      }
    }, 100);

    setIsLeft(!isLeft);
    return result;
  };

  const renderBoxes = () => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(<Box key={i} point={arr[i]} order={i} />);
    }
    return result;
  };

  const clean = () => {
    setArr(initArr());
    setIsLeft(true);
  };

  return (
    <div className="buttonPanel" role="Panel">
      <Text
        text="Нажимай кнопки по очереди, пока один из кубиков не наберет 5 очков. Начинает Левый"
        size="medium"
      ></Text>
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
        <Button text="rebuild" type="blue" onClick={() => clean()}></Button>
      </div>
    </div>
  );
};

export default Floor;
