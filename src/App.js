import React, {useState} from 'react';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import BasicNavbar from './component/navbar';
import Homepage from './pages/Homepage';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

const toggleForm = (formname) => {
  setCurrentForm(formname);
}

  return (
    <div className="App">
      {
        <>
          <header id='header' style={{width: '100%'}}>
            <BasicNavbar/>
          </header>
          <Homepage/>
        </>
      }
    </div>
  );
}
      /*currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/> */

      /**/
export default App;
