import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Input from './index';

describe('Input', () => {
  it('should render an input element', () => {
    render(<Input value="" onChange={() => {}} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should display the initial value', () => {
    render(<Input value="Test" onChange={() => {}} />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('Test');
  });

  it('should call the onChange callback when value change', () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Change' } });
    expect(handleChange).toHaveBeenCalledWith('Change');
  });
});
