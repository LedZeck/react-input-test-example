import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    const input = screen.getByTestId('input-field');
    expect(input).toBeInTheDocument();
  });

  it('should call onChange method when input value changes', () => {
    const handleChange = jest.fn();
    render(<App />);

    const input = screen.getByTestId('input-field');

    input.addEventListener('change', handleChange);
    expect(handleChange).toHaveBeenCalledTimes(0);

    input.dispatchEvent(new Event('change', { bubbles: true }));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should display the initial value', () => {
    render(<App />);
    const displayValue = screen.getByTestId('display-value');
    expect(displayValue).toHaveTextContent('Initial Input');
  });

  it('should display the new value', () => {
    render(<App />);
    const input = screen.getByTestId('input-field');
    const displayValue = screen.getByTestId('display-value');

    input.dispatchEvent(new Event('change', { bubbles: true }));
    fireEvent.change(input, { target: { value: 'Change' } });
    expect(displayValue).toHaveTextContent('Change');
  });
});
