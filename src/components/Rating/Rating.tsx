import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Rating.css';
import { getInfoThunk, getRatingThunk } from 'src/store/thunk/reting-think.js';
import Button from 'components/Button/Button';

type State = {
  loadingList: false;
  loadingInfo: false;
  ratingList: [];
  info: { name: string; weight: number; height: number; abilities: string[] };
  errorList: null;
  errorInfo: null;
};

const Rating = ({ testMode = true }) => {
  const dispatch = useDispatch();
  const { loadingList, loadingInfo, ratingList, info, errorList, errorInfo } =
    useSelector((state: State) => state);

  useEffect(() => {
    // @ts-ignore
    dispatch(getRatingThunk());
  }, []);

  const click = () => {
    dispatch({ type: 'LOADING_LIST' });
    // @ts-ignore
    dispatch(getRatingThunk());
  };

  const getInfo = (params) => {
    dispatch({ type: 'LOADING_INFO' });
    // @ts-ignore
    dispatch(getInfoThunk(params));
  };

  return (
    <div className="rating-container">
      <div className="rating-block">
        <Button text="refresh" type="blue" onClick={click} />
      </div>

      <div className="rating-block">
        <div>{errorList && <div>{JSON.stringify(errorList)}</div>}</div>
        {loadingList ? <div>LOADING...</div> : (
          <div role="Rating" className="rating">
            {ratingList.map(({ name, url }, i) => (
              <div key={url} className="line">
                <Button text="info" type="eco" onClick={() => getInfo(url)} />
                <div role="RatingRaw" className="rating-raw">{`${
                  i + 1
                } ${name}`}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rating-block">
        <div>{errorInfo && <div>{JSON.stringify(errorInfo)}</div>}</div>
        <div className="info">
          {loadingInfo ? (
            <div>LOADING...</div>
          ) : (
            <>
              <div>{`name: ${info.name}`}</div>
              <div>{`weight: ${info.height}`}</div>
              <div>{`height: ${info.height}`}</div>
              <div>{`abilities: ${JSON.stringify(info.abilities)}`}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rating;
