import { expectSaga } from 'redux-saga-test-plan';
import reducer from './reducers';
import { authUser } from './sagas';
import { MyErrorType } from 'src/lesson-24/utils/types';

describe('Form element', () => {
  test('Auth user and put token', () => {
    const age = Math.floor(Math.random() * 100);
    const surname = 'test' + age;
    const testExpires = 1735689600000;

    return expectSaga(authUser, {user: { name: 'test', surname, age }, errors: []})
      .withReducer(reducer)
      .hasFinalState({
        user: { name: 'test', surname, age },
        token: JSON.stringify({
          expires: testExpires,
          user: { name: 'test', surname, age }
        })
      })
      .run();
  });

  test('Auth error', () => {
    const testError: MyErrorType = {
      code: 3003,
      message: 'Test auth error',
    }

    return expectSaga(authUser, {user: null, errors: [testError]})
      .withReducer(reducer)
      .hasFinalState({
        user: null,
        token: null,
        errors: [testError]
      })
      .run();
  });
});
