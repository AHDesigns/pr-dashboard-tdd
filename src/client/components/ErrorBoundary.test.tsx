import React from 'react';
import { render, screen } from '@testing-library/react';
import testids from 'client/utils/testids';
import { ErrorBoundary } from './ErrorBoundary';
import { disableTestConsoleErrors } from 'client/utils/testHelpers';
import { Logger } from 'client/utils/logger';

describe('ErrorBoundary', () => {
  let ChildComponent: React.FC;
  const mockLogger: Logger = {
    error: jest.fn(),
  };

  beforeEach(() => {
    render(
      <ErrorBoundary logger={mockLogger}>
        <ChildComponent />
      </ErrorBoundary>,
    );
  });

  describe('when there are no errors', () => {
    const childText = "I am the ErrorBoundary's child";

    beforeAll(() => {
      ChildComponent = () => <div>{childText}</div>;
    });

    it('renders its children', () => {
      expect(screen.getByText(childText)).toBeInTheDocument();
    });
  });

  describe('when there are errors', () => {
    beforeAll(() => {
      disableTestConsoleErrors();
      ChildComponent = () => {
        throw new Error('poop');
      };
    });

    it('displays the error message', () => {
      const el = screen.getByTestId(testids.ERROR_BOUNDRY_MESSAGE);
      expect(el).toBeInTheDocument();
    });

    it('logs the error to the logger', () => {
      expect(mockLogger.error).toHaveBeenCalledWith(
        expect.any(String),
        expect.any(Error),
        expect.any(Object),
      );
    });
  });
});
