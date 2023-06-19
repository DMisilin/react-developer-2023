import React, { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Auth.css';
import {
  StyledAuthForm,
  StyledButton,
  StyledInput,
  StyledLabel,
} from '../styles/components';
import { USER_AUTH } from '../../lesson-24/utils/constants';
import { StateType } from '../../lesson-24/utils/types';
import { checkStorageToken, checkToken } from '../..//lesson-24/utils/methods';

export const Auth: FC = () => {
  const token = useSelector((state: StateType) => state?.token);
  const errors = useSelector((state: StateType) => state?.errors);
  const dispatch = useDispatch();

  const onClick = (data) => {
    console.log('Enter component -> onClick() -> data: ', data);
    dispatch({ type: USER_AUTH, payload: { some: 1234 } });
  };

  return (
    <>
      <div className="enter">
        <div className="enter-title">Enter login and password</div>
        <StyledAuthForm role="Form">
          <StyledLabel role="Username">
            username: <StyledInput name="username" defaultValue="username" />
          </StyledLabel>
          <StyledLabel role="Password">
            password: <StyledInput name="password" defaultValue="password" />
          </StyledLabel>
          <StyledButton type="button" onClick={onClick}>
            Auth
          </StyledButton>
        </StyledAuthForm>
      </div>

      <div className="errors">
        {errors && errors.length && <div>{JSON.stringify(errors)}</div>}
      </div>
      <div>
        {(checkToken(token) || checkStorageToken()) && (
          // Если в Storage есть свежий токен с expires > now(), то минуя форму авторизации сразу переходим дальше
          <Navigate to="/enter" replace={true} />
        )}
      </div>
    </>
  );
};
