/* eslint-env jest */

import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '@/shared/ui/Button/Button';

describe('Button Component', () => {
  test('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeDefined();
    expect(button.tagName).toBe('BUTTON');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('displays loading state correctly', () => {
    render(<Button isLoading>Click me</Button>);

    const button = screen.getByRole('button');
    const hasSpinnerClass = button.innerHTML.includes('spinner');
    expect(hasSpinnerClass).toBe(true);

    const buttonContent = button.textContent;
    expect(buttonContent).toContain('Click me');
  });
});
