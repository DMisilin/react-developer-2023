import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getRatingThunk, getInfoThunk } from 'src/store/thunk/rating-think';

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

  it('Check actions contains before and after "getRatingThunk"', async () => {
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

  it('Check actions payloads after "getRatingThunk"', async () => {
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

  it('Check actions contains before and after "getInfoThunk"', async () => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          name: 'test 2',
          weight: 1,
          height: 2,
          abilities: [{ability: {name: 'ability'}}],
        },
      });
    });

    let actions = store.getActions();
    expect(actions.length).toBe(0);

    await store.dispatch(getInfoThunk('url'));

    actions = store.getActions();
    expect(actions.length).toBe(2);
    expect(actions.find(elm => elm.type === 'LOADING_INFO')).not.toBeUndefined();
    expect(actions.find(elm => elm.type === 'GET_INFO')).not.toBeUndefined();
  });

  it('Check actions payloads after "getInfoThunk"', async () => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          name: 'test 2',
          weight: 12,
          height: 22,
          abilities: [
            {ability: {name: 'ability_1'}},
            {ability: {name: 'ability_2'}},
          ]
        },
      });
    });

    await store.dispatch(getInfoThunk('url_1'));

    const actions = store.getActions();
    const loading = actions.find(elm => elm.type === 'LOADING_INFO');
    const rating = actions.find(elm => elm.type === 'GET_INFO');
    
    expect(loading.payload).toBe('loading');
    expect(rating.payload).toEqual({
      name: 'test 2',
      weight: 12,
      height: 22,
      abilities: [ 'ability_1', 'ability_2' ]
    });
  });
});
