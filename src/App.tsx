import React from 'react';
import Hello from 'components/Hello';
import Button from 'components/Button/Button';
import Box from 'components/Box/Box';
import Floor from 'components/Floor/Floor';

const App = () => {
  const fn = () => console.log('lo_ol_line_6--> : ');

  return (
    <>
      <Hello name="TEST"></Hello>
      <Button text="Story1" type="eco" onClick={fn}></Button>
      <Floor groundType={'yellow'}></Floor>
    </>
  );
};

export default App;
