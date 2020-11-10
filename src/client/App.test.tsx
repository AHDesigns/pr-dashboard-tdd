import React from 'react';
import { render, screen } from '@testing-library/react';
import { SomeSharedType } from 'shared/types';
import App from './App';

function x(t: SomeSharedType): boolean {
  return t.exists;
}

test('renders learn react link', () => {
  console.log(x({ exists: false }));
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
