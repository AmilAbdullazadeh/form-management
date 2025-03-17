/* eslint-env jest */

import { render, screen, fireEvent } from '@testing-library/react';

import { Input } from '@/shared/ui/Input/Input';

describe('Input Component', () => {
  test('renders with label', () => {
    render(<Input label="Username" id="username" />);

    const label = screen.getByText('Username');
    expect(label).toBeDefined();
    expect(label.tagName).toBe('LABEL');
  });

  test('handles value change', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test value' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('displays error message when error is provided', () => {
    render(<Input error="This field is required" />);
    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeTruthy();

    const input = screen.getByRole('textbox');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  test('applies disabled style when disabled', () => {
    render(<Input disabled />);

    const input = screen.getByRole('textbox');
    expect(input.className).toContain('disabled');
  });
});
