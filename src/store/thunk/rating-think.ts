import axios from 'axios';
const RATING_URL = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=50';
const TEST_URL = 'https://pokeapi.co/api/v2/pokemon/45/';

const testList = [
  { name: 'name_1' },
  { name: 'name_2' },
  { name: 'name_3' },
  { name: 'name_4' },
  { name: 'name_5' },
  { name: 'name_6' },
  { name: 'name_7' },
  { name: 'name_8' },
  { name: 'name_9' },
  { name: 'name_10' },
];

export const getRatingThunk =
  (testMode = false) =>
  async (dispatch): Promise<void> => {
    dispatch({ type: 'LOADING_LIST', payload: 'loading' });

    if (testMode) {
      dispatch({
        type: 'GET_LIST',
        payload: testList,
      });
      return;
    }

    try {
      const { data } = await axios.get(RATING_URL, {
        headers: { 'Content-Type': 'application/json' },
      });
      const random = Math.floor(Math.random() * 39);
      dispatch({
        type: 'GET_LIST',
        payload: data.results.slice(random, random + 10),
      });
    } catch (error) {
      console.error('Error getRatingThunk():', error);
      dispatch({ type: 'LIST_ERROR', payload: error });
    }
  };

export const getInfoThunk =
  (url) =>
  async (dispatch): Promise<void> => {
    dispatch({ type: 'LOADING_INFO', payload: 'loading' });
    let payload = null;

    try {
      const storageData = localStorage.getItem(url);
      if (storageData) {
        payload = JSON.parse(storageData);
      } else {
        const { data } = await axios.get(url || TEST_URL, {
          headers: { 'Content-Type': 'application/json' },
        });
        const { name, weight, height, abilities } = data;
        const abilityArray = abilities.map(({ ability }) => ability.name);

        payload = { name, weight, height, abilities: abilityArray };
        localStorage.setItem(url, JSON.stringify(payload));
      }

      dispatch({ type: 'GET_INFO', payload });
    } catch (error) {
      console.error('Error getInfoThunk():', error);
      dispatch({ type: 'INFO_ERROR', payload: error });
    }
  };
