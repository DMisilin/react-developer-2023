import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Enter } from 'src/components/Enter';
import { Floor } from 'src/components/Floor/Floor';
import { NotFound } from 'src/components/NotFound/NotFound';

export const Navigation: FC = () => (
  <BrowserRouter basename="/react-developer-2023">
    <Routes>
      <Route path="/" element={<Enter />} />
      <Route path="/game" element={<Floor testMode={false} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
