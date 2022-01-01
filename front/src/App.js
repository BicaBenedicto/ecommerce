import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Home /> }/>
        <Route path='/products' element={ <Products /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
