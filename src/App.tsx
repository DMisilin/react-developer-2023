import React from 'react';
// import { Navigation } from 'src/navigation';
import store from 'src/store/redux/store';
import { Provider } from 'react-redux';
import Rating from './components/Rating/Rating';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/*<Navigation />*/}
      <BrowserRouter basename="react-developer-2023">
        <Provider store={store}>
          <Rating testMode={false} />
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
