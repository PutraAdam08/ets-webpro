import React, {useState} from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import BasicNavbar from './component/navbar';
import Homepage from './pages/Homepage';
import RecipeForm from './pages/AddEdit';
import HomeProfileEdit from './pages/ProfileEdit';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeProfile from './pages/Profil';
//import Recipes from './pages/Recipe';

function App () {

  
    return (
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Register/>}>
              </Route>
              <Route path="/login" element={<Login/>}>
              </Route>
              <Route path="/homepages" element={<><BasicNavbar/> <Homepage/></>}>
              </Route>
              <Route path="/profile" element={<><BasicNavbar/> <HomeProfile/></>}>
              </Route>
              <Route path="/profileEdit/:Email" element={<><BasicNavbar/> <HomeProfileEdit/></>}>
              </Route>
            </Routes>
          </BrowserRouter>
    );
}

export default App;