import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

const fn = () => console.log('test...');

describe('Button element', () => {
  test('Button rendering with set text', () => {
    const text = 'test_button';
    render(<Button text={text} onClick={fn} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Button rendering, find by role', () => {
    render(<Button text="some text" onClick={fn} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Button rendering with default class name', () => {
    render(<Button text="some text" onClick={fn} />);

    const element = screen.getByRole('button');
    expect(element.className).toBe('default');
  });

  test('Press button and call function', () => {
    const handleClick = jest.fn();
    render(<Button text="some text" onClick={handleClick} />);

    fireEvent.click(screen.getByText(/some text/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
