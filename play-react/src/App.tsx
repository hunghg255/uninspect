import './App.css';
import { useEffect, useState } from 'react';


import { init } from 'uninspect';

import Hello from '@/components/Hello/Hello';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    init({
      debug: false,
      redirect: 'https://www.google.com'
    })
  },[]);

  return (
    <div className='App'>
      {process.env.VITE_TEST}
      <Hello />
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Detect Inspect</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
