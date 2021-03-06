import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Products from './pages/Products';
import CategoriesPage from './pages/Categories';
import UserProfile from './pages/UserProfile';
import SearchItems from './components/SearchItems';
import ProductsByCategory from './pages/ProductsByCategory';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Settings from './pages/Settings';
import { actionUser } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userSaved = JSON.parse(localStorage.getItem('user'));
    if (userSaved) {
      dispatch(actionUser(userSaved));
    }
  }, [dispatch]);
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
        <Route path='/cart' element={ <Cart /> }/>
        <Route path='/settings' element={ <Settings />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
