import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders app', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app');
  expect(linkElement).toBeInTheDocument();
});
