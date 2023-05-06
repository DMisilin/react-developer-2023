import React from 'react';
import styled from 'styled-components';
import {
  StyledInput,
  StyledLabel,
  StyledForm,
  StyledButton,
} from '../styles/components';

const StyledP = styled.p`
  padding: 10px;
  margin: 0;
`;

type StartDataType = {
  player1: string;
  player2: string;
  size: string;
};

const initArr = (length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * 3));
  }
  return result;
};

const Form = ({ onStart, onSize }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const { player1, player2, myRadio } = event.target.elements;
    const data: StartDataType = {
      player1: player1.value,
      player2: player2.value,
      size: myRadio.value,
    };
    console.log(data);
    onStart(data);

    const elements = myRadio.value.split('x').map((elm) => +elm);
    const newArr = initArr(elements[0] * elements[1]);
    onSize(newArr);
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit} role="Form">
        <StyledLabel role="Label">
          player 1: <StyledInput name="player1" defaultValue="player1" />
        </StyledLabel>
        <StyledLabel role="Label">
          player 2: <StyledInput name="player2" defaultValue="player2" />
        </StyledLabel>
        <StyledP>
          Size:
          <StyledLabel role="Label">
            <StyledInput type="radio" name="myRadio" value="3x3" role="Input" />
            3x3
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="radio"
              name="myRadio"
              value="4x4"
              role="Input"
              defaultChecked={true}
            />{' '}
            4x4
          </StyledLabel>
          <StyledLabel role="Label">
            <StyledInput type="radio" name="myRadio" value="5x5" role="Input" />
            5x5
          </StyledLabel>
        </StyledP>
        <StyledButton type="submit">
          Start
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default Form;
