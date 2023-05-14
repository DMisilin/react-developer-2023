import React, { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Enter.css';
import {
  StyledButton,
  StyledEnterForm,
  StyledInput,
  StyledLabel,
} from '../styles/components';

export const Enter: FC = () => {
  const [entered, setEntered] = useState(false);
  const onSubmit = () => {
    setEntered(true);
  };

  return (
    <>
      <div className="enter">
        <div className="enter-title">Enter players name</div>
        <StyledEnterForm onSubmit={onSubmit} role="Form">
          <StyledLabel role="Label">
            player 1: <StyledInput name="player1" defaultValue="player1" />
          </StyledLabel>
          <StyledLabel role="Label">
            player 2: <StyledInput name="player2" defaultValue="player2" />
          </StyledLabel>
          <StyledButton type="submit">Go!</StyledButton>
        </StyledEnterForm>
      </div>

      <div>{entered && <Navigate to="game" replace={true} />}</div>
    </>
  );
};
