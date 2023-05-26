const initialState = {
  loading: false,
  ratingList: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING': {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case 'GET_RATING': {
      return {
        ...state,
        ratingList: action.payload,
        loading: false,
        error: null,
      };
    }
    case 'FETCH_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    }
    default:
      return state;
  }
};

export { rootReducer };
