import axios from 'axios';
const RATING_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getRatingThunk = () => async (dispatch) => {
  dispatch({ type: 'LOADING', payload: 'loading' });

  try {
    const { data } = await axios.get(RATING_URL, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('Rating was gow: ', data);
    dispatch({ type: 'GET_RATING', payload: data.results });
  } catch (error) {
    console.error('FETCH ERROR::', error);
    dispatch({ type: 'FETCH_ERROR', payload: error });
  }
};
