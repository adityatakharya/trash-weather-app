// App.js

import { useState } from 'react';
import './App.css';
import MainScreen from './components/MainScreen';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="App-header">Weather App</h1>
      <div className="App-content">
        <MainScreen />
        <Card />
      </div>
    </div>
  );
}

export default App;

