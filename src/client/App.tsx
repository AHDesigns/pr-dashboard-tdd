import React from 'react';
import { SomeSharedType } from 'shared/types';
import logo from './logo.svg';
import './App.css';

interface Props {
  name: string;
}

function x(t: SomeSharedType): boolean {
  return t.exists;
}

const App: React.FC<Props> = (props) => {
  console.log(x({ exists: false }));
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Hello {props.name}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
