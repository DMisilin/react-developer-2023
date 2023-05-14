import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => (
  <>
    <h1>Page not found</h1>
    <Link to="/">home</Link>
  </>
);
