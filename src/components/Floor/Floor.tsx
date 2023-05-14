import React, { useState } from 'react';
import './Floor.css';
import Box from '../Box/Box';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Form from '../Form/Form';
import {
  StyledCenteredDiv,
  StyledFloorDiv,
  StyledLabel,
} from '../styles/components';
import { getRandomArray } from '../helper/methods';
import { Navigate, useSearchParams } from 'react-router-dom';

const START_DATA_DEFAULT = {
  player1: 'name',
  player2: 'name',
  size: '0x0',
  fillings: 50,
  maxStartPoints: 2,
};
const TEST_ARRAY = [0, 1, 2, 3, 4, 5, 4, 3, 2];

export const Floor = ({ testMode = true }) => {
  const [isLeft, setIsLeft] = useState(true);
  const [exit, setExit] = useState(false);
  const [startData, setStartData] = useState(START_DATA_DEFAULT);
  const [arr, setArr] = useState(testMode ? TEST_ARRAY : []);
  const [searchParams, setSearchParams] = useSearchParams();

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
        alert(
          `Player ${
            isLeft ? searchParams.get('player1') : searchParams.get('player2')
          } win!`,
        );
      }
    }, 100);

    setIsLeft(!isLeft);
    return result;
  };

  /**
   * Перезагрузить поле для тех же игроков
   * */
  const clean = () => {
    const elements = startData.size.split('x').map((elm) => +elm);
    const newArray = getRandomArray(
      elements[0] * elements[1],
      +startData.fillings,
      +startData.maxStartPoints,
    );

    setArr(newArray);
    setIsLeft(true);
  };

  /**
   * Выход из игры
   * */
  const toExit = () => setExit(true);

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
            text={searchParams.get('player1')}
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
            text={searchParams.get('player2')}
            type="eco"
            onClick={() => setArr(updateArr('right'))}
          ></Button>
        </div>
      </StyledCenteredDiv>

      <div className="cleanButton">
        <Button text="against" type="eco" onClick={() => clean()}></Button>
        <Button text="exit" type="blue" onClick={() => toExit()}></Button>
      </div>

      <div>{exit && <Navigate to="/" replace={true} />}</div>
    </div>
  );
};
