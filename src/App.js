import React, {useState} from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import BasicNavbar from './component/navbar';
import Homepage from './pages/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Recipes from './pages/Recipe';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

const toggleForm = (formname) => {
  setCurrentForm(formname);
  }

  return (
    <div className="App">
      <header></header>
     
    </div>
  );
}
      
export default App;