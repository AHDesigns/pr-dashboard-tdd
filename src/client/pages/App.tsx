import React from 'react';
import { DataProvider } from 'client/components/Provider';
import { ErrorBoundary } from 'client/components/ErrorBoundary';
import testids from 'client/utils/testids';
import './App.css';
import logger from 'client/utils/logger';

const App: React.FC = () => {
  return (
    <div data-testid={testids.APP_VIEW} className='app'>
      <ErrorBoundary logger={logger}>
        <DataProvider>
          <div>Hello</div>
        </DataProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
