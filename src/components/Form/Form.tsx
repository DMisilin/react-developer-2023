import React from 'react';
import {
  StyledInput,
  StyledLabel,
  StyledForm,
  StyledButton,
  StyledP,
} from '../styles/components';
import { getRandomArray } from '../helper/methods';

type StartDataType = {
  size: string;
  fillings: number;
  maxStartPoints: number;
};

const Form = ({ onStart, onSize }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const { myRadio, fillings, maxStartPoints } =
      event.target.elements;
    const data: StartDataType = {
      size: myRadio.value,
      fillings: fillings.value,
      maxStartPoints: maxStartPoints.value,
    };
    console.log(data);
    onStart(data);

    const elements = myRadio.value.split('x').map((elm) => +elm);
    const newArr = getRandomArray(
      elements[0] * elements[1],
      +data.fillings,
      +data.maxStartPoints,
    );
    onSize(newArr);
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit} role="Form">
        <StyledLabel role="Label">
          fillings %:{' '}
          <StyledInput name="fillings" defaultValue="50" role="Input" />
        </StyledLabel>
        <StyledLabel role="Label">
          Max start points:{' '}
          <StyledInput name="maxStartPoints" defaultValue="2" role="Input" />
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
        <StyledButton type="submit">Start</StyledButton>
      </StyledForm>
    </>
  );
};

export default Form;
