import React, { useEffect, useState } from 'react';
import Rating from '../Rating/Rating';

const RATING_URL = 'http://localhost:3999/rating';

const Container = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(RATING_URL)
      .then((response) => response.json())
      .then(({ rating }) => {
        console.log('Rating was gow: ', rating);
        setList(rating);
      })
      .catch((e) => console.error('Back error: ', e));
  }, []);

  return (
    <>
      <Rating testMode={false}></Rating>
    </>
  );
};

export default Container;
