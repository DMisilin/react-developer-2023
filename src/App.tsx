import React from 'react';
import Floor from 'components/Floor/Floor';
import { Score } from 'components/Score/Score';
import Container from 'components/Container/Container';

const App = () => {
  return (
    <>
      <Floor testMode={false}></Floor>
      <Container></Container>
      {/*<Score />*/}
    </>
  );
};

export default App;
