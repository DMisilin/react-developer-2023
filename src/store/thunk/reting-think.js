import axios from 'axios';
const RATING_URL = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=50';

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

  try {
    const { data } = await axios.get(url, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('Info: ', data);
    const { name, weight, height, abilities } = data;
    const abilityArray = abilities.map(({ ability }) => ability.name);
    dispatch({
      type: 'GET_INFO',
      payload: { name, weight, height, abilities: abilityArray },
    });
  } catch (error) {
    console.error('Error getInfoThunk():', error);
    dispatch({ type: 'INFO_ERROR', payload: error });
  }
};
