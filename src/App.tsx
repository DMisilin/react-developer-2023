import React from 'react';
// import { Navigation } from 'src/navigation';
import { store } from './store/redux/store.js';
import { Provider } from 'react-redux';
import Rating from 'components/Rating/Rating';

const App = () => {
  return (
    <>
      {/*<Navigation />*/}
      <Provider store={store}>
        <Rating testMode={false} />
      </Provider>
    </>
  );
};

export default App;
