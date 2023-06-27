import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Score } from './Score';
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

describe('Score element', () => {
  test('Score rendering', () => {
    render(<Score />);
    expect(screen.getByRole('score')).toBeInTheDocument();
  });

  test('Score filling', () => {
    render(<Score />);
    const leftBlock = screen.getAllByRole('left');
    const rightBlock = screen.getAllByRole('right');
    const leftPoint = screen.getAllByRole('leftPoint');
    const rightPoint = screen.getAllByRole('rightPoint');
    const separator = screen.getAllByRole('separator');

    expect(leftBlock.length).toBe(1);
    expect(rightBlock.length).toBe(1);
    expect(separator.length).toBe(1);
    expect(leftPoint.length).toBe(1);
    expect(rightPoint.length).toBe(1);
  });
});
