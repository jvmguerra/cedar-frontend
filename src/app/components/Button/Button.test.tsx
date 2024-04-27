import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button text="Click me" />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('button click calls event handler', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('button is disabled', () => {
    render(<Button text="Disabled" disabled />);
    const buttonElement = screen.getByRole('button', { name: /disabled/i });
    expect(buttonElement).toBeDisabled();
  });

  test('button type is submit', () => {
    render(<Button text="Submit" type="submit" />);
    const buttonElement = screen.getByRole('button', { name: /submit/i });
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  test('button type is reset', () => {
    render(<Button text="Reset" type="reset" />);
    const buttonElement = screen.getByRole('button', { name: /reset/i });
    expect(buttonElement).toHaveAttribute('type', 'reset');
  });
});
