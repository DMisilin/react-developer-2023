const RATING_URL = 'http://localhost:3999/rating';

export const getRatingThunk = () => (dispatch) => {
  dispatch({ type: 'LOADING', payload: 'loading' });

  fetch(RATING_URL)
    .then((response) => response.json())
    .then(({ rating }) => {
      console.log('Rating was gow: ', rating);
      dispatch({ type: 'GET_RATING', payload: rating });
    })
    .catch((error) => {
      console.error('FETCH ERROR::', error);
      dispatch({ type: 'FETCH_ERROR', payload: error });
    });

  // instance(params)
  //   .then((json) => dispatch({ type: 'GET_POKEMONE_TYPE', payload: json.data }))
  //   .catch((error) => dispatch({ type: 'FETCH_ERROR', payload: error }));
};
