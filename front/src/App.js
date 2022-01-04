import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import CategoriesPage from './pages/Categories';
import UserProfile from './pages/UserProfile';
import SearchItems from './components/SearchItems';
import ProductsByCategory from './pages/ProductsByCategory';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Home /> }/>
        <Route path='/products' element={ <Products /> }/>
        <Route path='/products/:id' element={ <Details /> }/>
        <Route path='/categories' element={ <CategoriesPage /> }/>
        <Route path='/categories/:category' element={ <ProductsByCategory /> }/>
        <Route path='/user-profile' element={ <UserProfile /> }/>
        <Route path='/search' element={ <SearchItems /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
