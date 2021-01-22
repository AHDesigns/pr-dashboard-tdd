import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { DataProvider, dataContext, Pancakes } from './Provider';

describe('Provider', () => {
  const childText = 'I am the child';
  let contextData: Pancakes;

  const ChildComponent = () => {
    const data = useContext(dataContext);
    contextData = data;
    return <div>{childText}</div>;
  };

  beforeEach(() => {
    render(
      <DataProvider>
        <ChildComponent />
      </DataProvider>,
    );
  });

  describe('when provider first loads', () => {
    it('renders its children with initial state', () => {
      expect(screen.getByText(childText)).toBeInTheDocument();
      expect(contextData).toStrictEqual(
        expect.objectContaining<Pancakes>({
          subscribtions: [],
        }),
      );
    });
  });
});
