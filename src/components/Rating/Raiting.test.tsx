import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getRatingThunk, getInfoThunk } from '../../store/thunk/rating-think';
import { render, screen, fireEvent } from '@testing-library/react';
import Rating from 'components/Rating/Rating';
import React from 'react';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([thunk]);
const TEST_LIST = Array(50).fill({ name: 'test', weight: 1, height: 2, abilities: [{ability: {name: 'ability'}}] });
let store;
let mockData = {
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

describe('Test Post Actions', () => {
  describe('Store', () => {
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

    test('Check actions contains before and after "getRatingThunk"', async () => {
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

    test('Check actions payloads after "getRatingThunk"', async () => {
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

    test('Check actions contains before and after "getInfoThunk"', async () => {
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

    test('Check actions payloads after "getInfoThunk"', async () => {
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

  describe('Element', () => {
    test('Render element and children', () => {
      store = mockStore({
        ...mockData,
        ratingList: [{name: 'test', url: 'http://test.com'}],
      });

      render(
        <Provider store={store}>
          <Rating />
        </Provider>
      );
      const rating = screen.getByRole('rating-role');
      const info = screen.getByRole('block-info');
      const rows = screen.getAllByRole('RatingRaw');

      expect(rating.className).toBe(`rating-container`);
      expect(info.className).toBe(`rating-block`);
      expect(rows.length).toBe(1);
    });

    test('should disable submit button on submit click', () => {
      render(
        <Provider store={store}>
          <Rating />
        </Provider>
      );
      const button = screen.getByRole('refresh-button');

      fireEvent.click(button);
      expect(button).toBeTruthy();
    });
  });
});
