import './App.css';
import React from 'react';
import Counter from './components/Counter';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';

function App() {
  return (
    <div className='app'>
      <IncreaseByTwoCounter />
      <IncreaseCounter />
      <Counter />
      <DecreaseCounter />
    </div>
  );
}

export default App;
