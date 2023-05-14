import React from 'react';
import { Floor } from 'components/Floor';
import { Score } from 'components/Score/Score';
import Container from 'components/Container/Container';
import { Navigation } from 'src/navigation';

const App = () => {
  return (
    <>
      <Navigation />
      {/*<Floor testMode={false}></Floor>*/}
      {/*<Container></Container>*/}
      {/*<Score />*/}
    </>
  );
};

export default App;
