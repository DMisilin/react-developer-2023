import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Rating.css';
import { getRatingThunk } from 'src/store/thunk/reting-think.js';
import { AnyAction } from 'redux';

const TEST_RATING = [
  { name: 'User 1', points: 10 },
  { name: 'User 2', points: 20 },
  { name: 'User 3', points: 130 },
];

type State = {
  loading: boolean;
  ratingList: object[];
  error: string | null;
};

const Rating = ({ testMode = true }) => {
  const dispatch = useDispatch();
  const { loading, ratingList, error } = useSelector((state: State) => state);

  useEffect(() => {
    // @ts-ignore
    dispatch(getRatingThunk());
  }, []);

  let list = [];
  if (testMode) {
    list = TEST_RATING;
  } else {
    list = ratingList;
  }
  const click = () => {
    dispatch({ type: 'LOADING' });
    // @ts-ignore
    dispatch(getRatingThunk());
  };

  return (
    <div>
      <div>
        {!loading && !error && (
          <div role="Rating" className="rating">
            {list.map(({ name, points }, i) => (
              <div key={i} role="RatingRaw" className="rating-raw">{`${
                i + 1
              } ${name} - ${Math.floor(Math.random() * 100)} pt`}</div>
            ))}
          </div>
        )}
      </div>
      <div>{loading && <div>LOADING...</div>}</div>
      <div>{error && <div>{JSON.stringify(error)}</div>}</div>
      <button onClick={click}>Refresh</button>
    </div>
  );
};

export default Rating;
