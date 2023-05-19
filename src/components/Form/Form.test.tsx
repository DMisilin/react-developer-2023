import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';
import { userEvent } from '@storybook/testing-library';

const fn = () => console.log('mock');

describe('Form element', () => {
  test('Floor rendering', () => {
    render(<Form onSize={fn} onStart={fn} />);
    expect(screen.getByRole('Form')).toBeInTheDocument();
  });

  test('Form filling', () => {
    render(<Form onSize={fn} onStart={fn} />);
    const inputs = screen.getAllByRole('Input');
    const labels = screen.getAllByRole('Label');
    const button = screen.getAllByText('Start');

    expect(inputs.length).toBe(5);
    expect(labels.length).toBe(4);
    expect(button.length).toBe(1);
  });

  test('Form submit', () => {
    const onSize = jest.fn();
    const onStart = jest.fn();
    render(<Form onSize={onSize} onStart={onStart} />);

    expect(screen.getByRole('Form')).toBeInTheDocument();
    userEvent.click(screen.getByText('Start'));
    expect(onStart).toHaveBeenCalled();
    expect(onSize).toHaveBeenCalled();
  });
});
