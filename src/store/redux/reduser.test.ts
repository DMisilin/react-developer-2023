import { rootReducer } from './reducer';
import { InitialStoreType } from 'src/store/types';

const initialState: InitialStoreType = {
  loadingList: false,
  loadingInfo: false,
  ratingList: [],
  info: {
    name: 'no',
    weight: 0,
    height: 0,
    abilities: [],
  },
  errorList: null,
  errorInfo: null,
};

describe('reducer', () => {
  it('State result after some action', () => {
    const action = {type: 'SOME_TYPE'};
    const result = rootReducer(initialState, action);
    expect(result).toMatchObject(initialState);
  });

  it('State result after LOADING_LIST action', () => {
    const action = {type: 'LOADING_LIST'};
    const result = rootReducer(initialState, action);

    const stateAfter = {
      ...initialState,
      loadingList: true,
    }
    expect(result).toMatchObject(stateAfter);
  });

  it('State result after GET_LIST action', () => {
    const ratingList = ['first', 'second'];
    const action = {type: 'GET_LIST', payload: ratingList};
    const result = rootReducer(initialState, action);

    const stateAfter = {
      ...initialState,
      ratingList
    }
    expect(result).toMatchObject(stateAfter);
  });

  it('State result after LIST_ERROR action', () => {
    const errorMessage = 'TEST_ERROR_MSG';
    const action = {type: 'LIST_ERROR', payload: { message: errorMessage }};
    const result = rootReducer(initialState, action);

    const stateAfter = {
      ...initialState,
      errorList: errorMessage,
    }
    expect(result).toMatchObject(stateAfter);
  });

  it('State result after LOADING_INFO action', () => {
    const action = {type: 'LOADING_INFO'};
    const result = rootReducer(initialState, action);

    const stateAfter = {
      ...initialState,
      loadingInfo: true,
      errorInfo: null,
    }
    expect(result).toMatchObject(stateAfter);
  });

  it('State result after GET_INFO action', () => {
    const info = {some: 123, name: 'test'};
    const action = {type: 'GET_INFO', payload: info};
    const result = rootReducer(initialState, action);

    const stateAfter = {
      ...initialState,
      info,
    }
    expect(result).toMatchObject(stateAfter);
  });

  it('State result after INFO_ERROR action', () => {
    const errorMessage = 'INFO_ERROR_TEST';
    const action = {type: 'INFO_ERROR', payload: { message: errorMessage }};
    const result = rootReducer(initialState, action);

    const stateAfter = {
      ...initialState,
      errorInfo: errorMessage,
    }
    expect(result).toMatchObject(stateAfter);
  });
});