import React from 'react';
import Floor from 'components/Floor/Floor';
import { Score } from 'components/Score/Score';

const App = () => {
  return (
    <>
      <Floor testMode={false}></Floor>
      {/*<Score />*/}
    </>
  );
};

export default App;
