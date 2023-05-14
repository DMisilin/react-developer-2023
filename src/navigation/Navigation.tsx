import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Enter } from 'components/Enter';
import { Floor } from 'components/Floor/Floor';
import { NotFound } from 'components/NotFound/NotFound';

export const Navigation: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Enter />} />
      <Route path="/game" element={<Floor testMode={false} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
