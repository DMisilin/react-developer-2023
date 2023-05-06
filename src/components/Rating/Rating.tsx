import React from 'react';
import './Rating.css';

const TEST_RATING = [
  { name: 'User 1', points: 10 },
  { name: 'User 2', points: 20 },
  { name: 'User 3', points: 130 },
];

const Rating = ({ rating, testMode = true }) => {
  const list = testMode ? TEST_RATING : rating;

  return (
    <>
      <div role="Rating" className="rating">
        {list.map(({ name, points }, i) => (
          <div key={i} role="RatingRaw" className="rating-raw">{`${
            i + 1
          } ${name} - ${points} pt`}</div>
        ))}
      </div>
    </>
  );
};

export default Rating;
