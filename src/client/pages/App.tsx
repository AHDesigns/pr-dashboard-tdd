import React from 'react';
import Provider from 'client/components/Provider';
import { ErrorBoundary } from 'client/components/ErrorBoundary';
import testids from 'client/utils/testids';
import './App.css';
import logger from 'client/utils/logger';

const App: React.FC = () => {
  return (
    <div data-testid={testids.APP_VIEW} className='app'>
      <ErrorBoundary logger={logger}>
        <Provider>{() => <div></div>}</Provider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
