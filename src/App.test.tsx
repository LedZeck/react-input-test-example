import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const setArrangement = () => {
  render(<App />);
  const input = screen.getByTestId('input-field');
  const displayValue = screen.getByTestId('display-value');
  return { input, displayValue };
};

const handleChange = jest.fn();

describe('App', () => {
  it('renders App component', () => {
    const { input } = setArrangement();

    expect(input).toBeInTheDocument();
  });

  it('should call onChange method when input value changes', () => {
    const { input } = setArrangement();

    input.addEventListener('change', handleChange);
    expect(handleChange).toHaveBeenCalledTimes(0);

    input.dispatchEvent(new Event('change', { bubbles: true }));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should display the initial value', () => {
    const { displayValue } = setArrangement();

    expect(displayValue).toHaveTextContent('Initial Input');
  });

  it('should display the new value', () => {
    const { input, displayValue } = setArrangement();

    input.dispatchEvent(new Event('change', { bubbles: true }));
    fireEvent.change(input, { target: { value: 'Change' } });

    expect(displayValue).toHaveTextContent('Change');
  });
});
