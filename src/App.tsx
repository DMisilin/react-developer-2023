import React from 'react';
import { Navigation } from 'src/navigation';
import store from './lesson-24/index';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};

export default App;
