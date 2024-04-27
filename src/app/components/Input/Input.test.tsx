import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  const mockOnChange = jest.fn();

  it('renders input element with label', () => {
    render(<Input label="Email" id="email" type="email" onChange={mockOnChange} />);
    const inputElement = screen.getByLabelText("Email");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  it('displays error message when provided', () => {
    const errorMessage = "Invalid input";
    render(<Input label="Email" id="email" type="email" onChange={mockOnChange} errorMessage={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('text-error');
  });

  it('calls onChange handler when input changes', () => {
    render(<Input label="Email" id="email" type="email" onChange={mockOnChange} />);
    const inputElement = screen.getByLabelText("Email");
    fireEvent.change(inputElement, { target: { value: 'user@example.com' } });
    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith(expect.anything());
  });

  it('applies error styling when there is an error', () => {
    const errorMessage = "Input required";
    render(<Input label="Username" id="username" type="text" onChange={mockOnChange} errorMessage={errorMessage} />);
    const inputElement = screen.getByLabelText("Username");
    expect(inputElement).toHaveClass('border-error');
  });

  it('has correct default type when not specified', () => {
    render(<Input label="Username" id="username" onChange={mockOnChange} />);
    const inputElement = screen.getByLabelText("Username");
    expect(inputElement).toHaveAttribute('type', 'text');
  });
});