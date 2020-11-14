import React from 'react';
import Provider from 'client/components/Provider';
import testids from 'client/utils/testids';
import './App.css';
import { ErrorBoundary } from './ErrorBoundary';

const App: React.FC = () => {
  return (
    <div data-testid={testids.APP_VIEW} className='app'>
      <ErrorBoundary>
        <Provider>{() => <div></div>}</Provider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
