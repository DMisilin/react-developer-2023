import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import { Floor } from './Floor';
import { Provider } from 'react-redux';
import Rating from 'components/Rating/Rating';

// const mockNavigate = jest.fn()
// jest.mock('react-router-dom', () => ({
//   navigate: mockNavigate,
// }))

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

  test('Clear button click', () => {
    render(
      <MemoryRouter initialEntries={['?player1=pl1&player2=pl2']}>
        <Floor />
      </MemoryRouter>
    );

    const button = screen.getByText('against');
    fireEvent.click(button);

    expect(button).toBeTruthy();
  });

  test('Rebuild box list after click clear button', () => {
    render(
      <MemoryRouter initialEntries={['?player1=pl1&player2=pl2']}>
        <Floor />
      </MemoryRouter>
    );

    const boxesBefore = screen.getAllByRole('Box');
    const boxClassesBefore = boxesBefore.map(elm => elm.getAttribute('class'));

    const button = screen.getByText('against');
    fireEvent.click(button);

    const boxesAfter = screen.getAllByRole('Box');
    const boxClassesAfter = boxesAfter.map(elm => elm.getAttribute('class'));

    expect(boxClassesBefore.length).toEqual(9);
    expect(boxClassesAfter.length).toEqual(9);
    expect(boxClassesAfter).not.toEqual(boxClassesBefore);

    const boxes = screen.queryByText('Box');
    expect(boxes).not.toBeInTheDocument();
  });

  test('Boxes not found', () => {
    render(
      <MemoryRouter initialEntries={['?player1=pl1&player2=pl2']}>
        <Floor testMode={false} />
      </MemoryRouter>
    );

    const boxes = screen.queryByText('Box');
    expect(boxes).not.toBeInTheDocument();
  });

  test('Rebuild box list after Player1 move', () => {
    render(
      <MemoryRouter initialEntries={['?player1=pl1&player2=pl2']}>
        <Floor />
      </MemoryRouter>
    );

    const boxesBefore = screen.getAllByRole('Box');
    const boxClassesBefore = boxesBefore.map(elm => elm.getAttribute('class'));

    const pl1 = screen.getByText('pl1');
    fireEvent.click(pl1);

    const boxesAfter = screen.getAllByRole('Box');
    const boxClassesAfter = boxesAfter.map(elm => elm.getAttribute('class'));

    expect(boxClassesBefore.length).toEqual(9);
    expect(boxClassesAfter.length).toEqual(9);
    expect(boxClassesAfter).not.toEqual(boxClassesBefore);
  });

  test('Rebuild box list after Player2 move', () => {
    render(
      <MemoryRouter initialEntries={['?player1=pl1&player2=pl2']}>
        <Floor />
      </MemoryRouter>
    );

    const boxesBefore = screen.getAllByRole('Box');
    const boxClassesBefore = boxesBefore.map(elm => elm.getAttribute('class'));

    // Первый ход
    const pl1 = screen.getByText('pl1');
    fireEvent.click(pl1);
    // Ход соперника
    const pl2 = screen.getByText('pl2');
    fireEvent.click(pl2);

    const boxesAfter = screen.getAllByRole('Box');
    const boxClassesAfter = boxesAfter.map(elm => elm.getAttribute('class'));

    expect(boxClassesBefore.length).toEqual(9);
    expect(boxClassesAfter.length).toEqual(9);
    expect(boxClassesAfter).not.toEqual(boxClassesBefore);
  });

  test('Not rebuild box list if not your move', () => {
    render(
      <MemoryRouter initialEntries={['?player1=pl1&player2=pl2']}>
        <Floor />
      </MemoryRouter>
    );

    const boxesBefore = screen.getAllByRole('Box');
    const boxClassesBefore = boxesBefore.map(elm => elm.getAttribute('class'));

    const pl2 = screen.getByText('pl2');
    fireEvent.click(pl2);

    const boxesAfter = screen.getAllByRole('Box');
    const boxClassesAfter = boxesAfter.map(elm => elm.getAttribute('class'));

    expect(boxClassesAfter).toEqual(boxClassesBefore);
  });

  test('Click to exit button', () => {
    render(
      <MemoryRouter initialEntries={['?player1=pl1&player2=pl2']}>
        <Floor />
      </MemoryRouter>
    );

    // Сразу проверяется существование элементов, т.к иначе функция вернет ошибку
    screen.getAllByRole('Box');
    let exit = screen.getByText('exit');
    fireEvent.click(exit);

    exit = screen.queryByText('Box');
    expect(exit).not.toBeInTheDocument();
  });
});
