import {
  USER_AUTH,
  USER_AUTH_ERROR,
  USER_AUTH_SUCCESS,
  USER_TOKEN_SUCCESS,
} from './utils/constants';

const reducer = (state: any, action: any) => {
  console.log('lo_ol_line_4--> : reducer');
  switch (action.type) {
    case USER_AUTH:
      console.log('USER_AUTH --> action ', action);
      if (!Object.keys(action.payload).length) {
        return state;
      }

      return {
        ...state,
        ...action.payload,
      };

    case USER_AUTH_ERROR:
      console.log('USER_AUTH_ERROR--> action ', action);

      return {
        ...state,
        errors: action.errors,
        user: null,
        token: null,
      };

    case USER_AUTH_SUCCESS:
      console.log('USER_AUTH_SUCCESS --> action ', action);

      return {
        ...state,
        user: action.user,
      };

    case USER_TOKEN_SUCCESS:
      console.log('USER_TOKEN_SUCCESS --> action ', action);

      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
