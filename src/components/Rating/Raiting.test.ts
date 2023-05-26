import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getRatingThunk } from '../../store/thunk/reting-think';

const mockStore = configureMockStore([thunk]);
const TEST_LIST = [
  { name: 'User 1' },
  { name: 'User 2' },
  { name: 'User 3' },
  { name: 'User 3' },
];
let store;

describe('Test Post Actions', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({
      loading: false,
      ratingList: [],
      error: null,
    });
  });
  afterEach(() => {
    moxios.uninstall();
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
    expect(actions.find(elm => elm.type === 'LOADING')).not.toBeUndefined();
    expect(actions.find(elm => elm.type === 'GET_RATING')).not.toBeUndefined();
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
    const loading = actions.find(elm => elm.type === 'LOADING');
    const rating = actions.find(elm => elm.type === 'GET_RATING');

    expect(loading.payload).toBe('loading');
    expect(rating.payload).toEqual(TEST_LIST);
  });

  it('Starting state', async () => {
    const state = store.getState();
    expect(state.loading).toBe(false);
    expect(state.ratingList).toEqual([]);
    expect(state.error).toBeNull();
  });
});
