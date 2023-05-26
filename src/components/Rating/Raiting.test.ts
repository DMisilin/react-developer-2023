import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getRatingThunk } from '../../store/thunk/reting-think';

const mockStore = configureMockStore([thunk]);
const TEST_LIST = Array(50).fill({ name: 'test', weight: 1, height: 2, abilities: [{ability: {name: 'ability'}}] });
let store;

describe('Test Post Actions', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({
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
    });
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Starting state', async () => {
    const state = store.getState();
    expect(state.loadingList).toBe(false);
    expect(state.loadingInfo).toBe(false);
    expect(state.ratingList).toEqual([]);
    expect(state.info).toEqual({ name: 'no', weight: 0, height: 0, abilities: [] });
    expect(state.errorList).toBeNull();
    expect(state.errorInfo).toBeNull();
  });

  it('Check actions contains before and after thunk', async () => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          results: [],
        },
      });
    });

    let actions = store.getActions();
    expect(actions.length).toBe(0);

    await store.dispatch(getRatingThunk());

    actions = store.getActions();
    expect(actions.length).toBe(2);
    expect(actions.find(elm => elm.type === 'LOADING_LIST')).not.toBeUndefined();
    expect(actions.find(elm => elm.type === 'GET_LIST')).not.toBeUndefined();
  });

  it('Check actions payloads', async () => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          results: TEST_LIST,
        },
      });
    });

    await store.dispatch(getRatingThunk());

    const actions = store.getActions();
    const loading = actions.find(elm => elm.type === 'LOADING_LIST');
    const rating = actions.find(elm => elm.type === 'GET_LIST');
    
    expect(loading.payload).toBe('loading');
    expect(rating.payload.length).toEqual(10);
  });
});
