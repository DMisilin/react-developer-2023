import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Rating from 'components/Rating/Rating';
import { Enter } from 'components/Enter';
import { Floor } from 'components/Floor/Floor';
import { NotFound } from 'components/NotFound/NotFound';

export const Navigation: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Enter />} />
      <Route path="/rating" element={<Rating testMode={true} rating={[]} />} />
      <Route path="/game" element={<Floor testMode={false} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
