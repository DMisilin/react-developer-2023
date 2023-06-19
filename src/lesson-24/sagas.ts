import { call, put, takeEvery } from 'redux-saga/effects';
import {
  USER_AUTH,
  USER_AUTH_ERROR,
  USER_AUTH_SUCCESS,
  USER_TOKEN_SUCCESS,
} from './utils/constants';
import { getUser, getToken } from './utils/api';
import { ActionType } from 'src/lesson-24/utils/types';

export function* authUser(action: ActionType = null) {
  console.log('authSaga was started: ');
  const { user, errors: userErrors } = yield call(getUser, action);

  if (userErrors && userErrors.length) {
    yield put({ type: USER_AUTH_ERROR, user: {}, errors: userErrors });
  } else {
    console.log('User: ', user);
    yield put({ type: USER_AUTH_SUCCESS, user, errors: [] });

    const token = yield call(getToken, user);
    // Сохраняем токен в наш store вместе с временем жизни
    yield put({ type: USER_TOKEN_SUCCESS, token });
    // Сохраняем токен в наш storage, чтоб при обновлении страницы, токен остался
    localStorage.setItem('user_token', token);
  }
}

export function* authSaga() {
  console.log('authSaga was started');

  yield takeEvery(USER_AUTH, authUser);
}
