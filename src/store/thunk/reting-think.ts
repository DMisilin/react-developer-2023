import axios from 'axios';
const RATING_URL = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=50';
const TEST_URL = 'https://pokeapi.co/api/v2/pokemon/45/';

export const getRatingThunk = () => async (dispatch) => {
  dispatch({ type: 'LOADING_LIST', payload: 'loading' });

  try {
    const { data } = await axios.get(RATING_URL, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('Rating was gow: ', data);
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

export const getInfoThunk = (url) => async (dispatch) => {
  dispatch({ type: 'LOADING_INFO', payload: 'loading' });
  let payload = null;

  try {
    const storageData = localStorage.getItem(url);
    if (storageData) {
      console.log('Data from storage...');
      payload = JSON.parse(storageData);
    } else {
      const { data } = await axios.get(url || TEST_URL, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Info: ', data);
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
