import React, { memo, useState } from 'react';
import styled from 'styled-components';

// type InputNameProps = {
//   value: string;
//   onChange: (v: string) => void;
// };
//
// type InputSizeProps = {
//   value: number;
//   onChange: (v: number) => void;
// };
//
// const MyInput = memo<InputNameProps>(({ value, onChange }) => {
//   return (
//     <input
//       onChange={(event) => onChange(event.target.value)}
//       value={value}
//     ></input>
//   );
// });
// MyInput.displayName = 'MyInput';
//
// const Form = () => {
//   console.log();
//   const [value, setValue] = useState('');
//   const onSubmit = (event) => {
//     event.preventDefault();
//     console.log('lo_ol_line_16--> event: ', value);
//   };
//
//   return (
//     <form onSubmit={onSubmit}>
//       <fieldset>
//         <legend>Inter players names and floor size</legend>
//         <MyInput onChange={(v) => setValue(v)} value={value}></MyInput>
//         <button type="submit">Start</button>
//       </fieldset>
//     </form>
//   );
// };

const StyledInput = styled.input`
  margin: 5px;
  font-size: 20px;
  border: #000088;
  font-family: monospace;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  width: 100%;
  padding: 10px;
  font-family: monospace;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 400px;
  height: 250px;
  background-color: #cccccc;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  width: 93%;
  margin-left: 15px;
  padding: 5px;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.55);
  font-family: monospace;
  font-size: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: none;
  }
`;

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
      <StyledForm onSubmit={onSubmit}>
        <StyledLabel>
          player 1: <StyledInput name="player1" defaultValue="player1" />
        </StyledLabel>
        <StyledLabel>
          player 2: <StyledInput name="player2" defaultValue="player2" />
        </StyledLabel>
        <StyledP>
          Size:
          <StyledLabel>
            <StyledInput type="radio" name="myRadio" value="3x3" />
            3x3
          </StyledLabel>
          <StyledLabel>
            <StyledInput
              type="radio"
              name="myRadio"
              value="4x4"
              defaultChecked={true}
            />{' '}
            4x4
          </StyledLabel>
          <StyledLabel>
            <StyledInput type="radio" name="myRadio" value="5x5" />
            5x5
          </StyledLabel>
        </StyledP>
        <StyledButton type="submit">Start</StyledButton>
      </StyledForm>
    </>
  );
};

export default Form;
