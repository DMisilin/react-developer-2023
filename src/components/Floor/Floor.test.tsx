import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import { Floor } from './Floor';

describe('Floor element', () => {
  test('Floor rendering', () => {
    render(
      <MemoryRouter initialEntries={['?player1=pl1&player2=pl2']}>
        <Floor />
      </MemoryRouter>
    );
    expect(screen.getByRole('Panel')).toBeInTheDocument();
  });

  test('Floor filling', () => {
    render(
      <MemoryRouter initialEntries={['?player1=pl1&player2=pl2']}>
        <Floor />
      </MemoryRouter>
    );
    const buttons = screen.getAllByRole('button');
    const boxes = screen.getAllByRole('Box');
    const form = screen.getAllByRole('Form');

    expect(buttons.length).toBe(5);
    expect(boxes.length).toBe(9);
    expect(boxes.length).toBe(9);
    expect(form.length).toBe(1);
  });
});
