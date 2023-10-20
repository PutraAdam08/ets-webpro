
import { useState } from 'react';
import './App.css';
import { Registration } from './page/Registration';

function App() {

  const [currentForm, setCurrentFrom] = useState('registration')

  return (
    <div className="App">
      <Registration/>
    </div>
  );
}

export default App;
