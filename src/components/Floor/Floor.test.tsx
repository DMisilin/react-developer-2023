import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Floor from './Floor';

describe('Floor element', () => {
  test('Floor rendering', () => {
    render(<Floor />);
    expect(screen.getByRole('Panel')).toBeInTheDocument();
  });

  test('Floor filling', () => {
    render(<Floor />);
    const buttons = screen.getAllByRole('button');
    const boxes = screen.getAllByRole('Box');

    expect(buttons.length).toBe(4);
    expect(boxes.length).toBe(9);
  });
});
