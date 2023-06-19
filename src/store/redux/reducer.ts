type InfoType = {
  name: string;
  weight: number;
  height: number;
  abilities: string[];
};

type InitialStoreType = {
  loadingList: boolean;
  loadingInfo: boolean;
  ratingList: string[];
  info: InfoType;
  errorList: null;
  errorInfo: null;
};

const initialState = {
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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_LIST': {
      return {
        ...state,
        loadingList: true,
        errorList: null,
      };
    }
    case 'GET_LIST': {
      return {
        ...state,
        ratingList: action.payload,
        loadingList: false,
        errorList: null,
      };
    }
    case 'LIST_ERROR': {
      return {
        ...state,
        errorList: action.payload.message,
      };
    }
    case 'LOADING_INFO': {
      return {
        ...state,
        loadingInfo: true,
        errorInfo: null,
      };
    }
    case 'GET_INFO': {
      return {
        ...state,
        info: action.payload,
        loadingInfo: false,
        errorInfo: null,
      };
    }
    case 'INFO_ERROR': {
      return {
        ...state,
        errorInfo: action.payload.message,
      };
    }
    default:
      return state;
  }
};

export { rootReducer };
