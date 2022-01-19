import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Context from './Context';
import store from '../redux/store';

export default function Providers({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('Anônimo');
  const [search, setSearch] = useState('');
  const [cartList, addCartList] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const contextValue = {
    login: {
      name,
      setName,
      email,
      setEmail,
    },
    searchBar: {
      search,
      setSearch,
    },
    cart: {
      cartList,
      addCartList,
    },
    products: {
      category,
      setCategory,
      products,
      setProducts,
    }
  };

  return (
    <Provider store={ store }>
      <Context.Provider value={contextValue}>
        {children}
      </Context.Provider>
    </Provider>
  );
}
