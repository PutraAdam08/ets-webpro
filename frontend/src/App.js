import React, {useState} from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import BasicNavbar from './component/navbar';
import Homepage from './pages/Homepage';
import RecipeForm from './pages/AddEdit';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//aSimport Recipes from './pages/Recipe';

function App() {

  return (
    <div className="App">
      <Register/>
    </div>
  );
}
      /*currentForm === "login" ? <Login onFormRoutes={toggleForm} /> : <Register onFormRoutes={toggleForm}/> */

      /**/
export default App;
