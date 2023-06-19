import {
  legacy_createStore as createStore,
  applyMiddleware,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from 'src/store/redux/reducer';
import { InitialStoreType } from '../types';

interface Payload {
  message?: string;
}

type ArticleAction = {
  type: string;
  payload: Payload;
};

type DispatchType = (args: ArticleAction) => ArticleAction;

const store: Store<InitialStoreType, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(rootReducer, applyMiddleware(thunk));

export default store;
