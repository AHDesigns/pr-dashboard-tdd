import React from 'react';
import { render, screen } from '@testing-library/react';
import testids from 'client/utils/testids';
import { disableTestConsoleErrors } from 'client/utils/testHelpers';
import Provider from 'client/components/Provider';
import App from './App';

jest.mock('../components/Provider');

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('when no errors are thrown', () => {
    beforeAll(() => {
      (Provider as jest.Mock).mockImplementation(() => (
        <div data-testid='provider'>poop</div>
      ));
    });

    it('renders app', () => {
      const el = screen.getByTestId(testids.APP_VIEW);
      expect(el).toBeInTheDocument();
    });

    it('renders the provider', () => {
      const el = screen.getByTestId('provider');
      expect(el).toBeInTheDocument();
    });
  });

  describe('when an error is thrown', () => {
    beforeAll(() => {
      disableTestConsoleErrors();
      (Provider as jest.Mock).mockImplementation(() => {
        throw new Error('poop');
      });
    });

    it('still renders the app', () => {
      const el = screen.getByTestId(testids.APP_VIEW);
      expect(el).toBeInTheDocument();
    });

    it('renders the fallback error message', () => {
      const el = screen.getByTestId(testids.ERROR_BOUNDRY_MESSAGE);
      expect(el).toBeInTheDocument();
    });
  });
});
