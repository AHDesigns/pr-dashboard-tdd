import React from 'react';
import Provider from 'client/components/Provider';
import { ErrorBoundary } from 'client/components/ErrorBoundary';
import testids from 'client/utils/testids';
import './App.css';
import logger from 'client/utils/logger';

// TODO: move this into Provider and rename
const dataStub = { stuff: 'i am stuff: 0' };
const DataContext = React.createContext(dataStub);

const Data: React.FC = ({ children }) => {
  const [stuff, updateStuff] = React.useState(dataStub);
  React.useEffect(() => {
    setInterval(() => {
      updateStuff((lastStuff) => {
        const [msg, n] = lastStuff.stuff.split(':');
        return { stuff: msg + ':' + (parseInt(n) + 1) };
      });
    }, 1000);
  }, []);

  return <DataContext.Provider value={stuff}>{children}</DataContext.Provider>;
};

const App: React.FC = () => {
  return (
    <div data-testid={testids.APP_VIEW} className='app'>
      <ErrorBoundary logger={logger}>
        <Data>
          <Provider>{() => <div></div>}</Provider>
          <Child />
        </Data>
      </ErrorBoundary>
    </div>
  );
};

const Child: React.FC = () => {
  const data = React.useContext(DataContext);
  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
};

export default App;
