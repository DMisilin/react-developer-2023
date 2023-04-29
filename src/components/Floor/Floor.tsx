import React, { useState } from 'react';
import styled from 'styled-components';
import './Floor.css';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Form from '../Form/Form';

const START_DATA_DEFAULT = {
  player1: 'name',
  player2: 'name',
  size: '0x0',
};
const handleWidth = (size: string) => {
  switch (size) {
    case '5x5':
      return '630px';
    case '4x4':
      return '490px';
    default:
      return '370px';
  }
};

const StyledCenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const StyledFloorDiv = styled.div<{ size: string }>`
  display: flex;
  flex-wrap: wrap;
  width: ${({ size = '3x3' }) => handleWidth(size)};
  height: ${({ size = '3x3' }) => handleWidth(size)};
`;

const StyledLabel = styled.label`
  font-size: 20px;
  width: auto;
  padding: 10px;
  font-family: monospace;
  text-align: center;
`;

const Floor = ({ groundType = '', testMode = true }) => {
  const [isLeft, setIsLeft] = useState(true);
  const [startData, setStartData] = useState(START_DATA_DEFAULT);
  const [arr, setArr] = useState(testMode ? initArr() : []);

  /**
   * Наполнение поля
   * */
  function initArr() {
    if (testMode) {
      return [0, 1, 2, 3, 4, 5, 4, 3, 2];
    }

    const result = [];
    const elements = startData.size.split('x').map((elm) => +elm);
    for (let i = 0; i < elements[0] * elements[1]; i++) {
      result.push(Math.floor(Math.random() * 3));
    }
    return result;
  }

  // Publish to Score.tsx
  const publish = (eventName, data: { isLeft: boolean }) => {
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
  };

  /**
   * Ход игрока - обновление поля
   * */
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
        alert(`Player ${isLeft ? startData.player1 : startData.player2} win!`);
      }
    }, 100);

    setIsLeft(!isLeft);
    return result;
  };

  /**
   * Перезагрузить поле для тех же игроков
   * */
  const clean = () => {
    setArr(initArr());
    setIsLeft(true);
  };

  return (
    <div className="buttonPanel" role="Panel">
      <StyledCenteredDiv>
        <Form onStart={setStartData} onSize={setArr} />
      </StyledCenteredDiv>
      <Text
        text="Нажимай кнопки по очереди, пока один из кубиков не наберет 5 очков. Начинает Левый"
        size="medium"
      ></Text>

      <StyledCenteredDiv>
        <div className="playerButton">
          <StyledLabel>{isLeft && 'Your move'}</StyledLabel>
          <Button
            text={startData.player1}
            type="eco"
            onClick={() => setArr(updateArr('left'))}
          ></Button>
        </div>
        <StyledFloorDiv size={startData.size}>
          {arr.map((elm, i) => (
            <Box key={i} point={arr[i]} order={i} />
          ))}
        </StyledFloorDiv>
        <div className="playerButton">
          <StyledLabel>{!isLeft && 'Your move'}</StyledLabel>
          <Button
            text={startData.player2}
            type="eco"
            onClick={() => setArr(updateArr('right'))}
          ></Button>
        </div>
      </StyledCenteredDiv>

      <div className="cleanButton">
        <Button text="against" type="blue" onClick={() => clean()}></Button>
      </div>
    </div>
  );
};

export default Floor;
