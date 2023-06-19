import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from 'src/store/redux/reducer';

interface IArticle {
  id: number;
  title: string;
  body: string;
}

type ArticleState = {
  articles: IArticle[];
};

type ArticleAction = {
  type: string;
  article: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// @ts-ignore
const store: Store<ArticleState, ArticleAction> & { dispatch: DispatchType } =
  createStore(rootReducer, applyMiddleware(thunk));

export default store;

// const enhancer = composeEnhancers(applyMiddleware(thunk));
//
// export const store = createStore(rootReducer, enhancer);
