import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('Anônimo');
  const [search, setSearch] = useState('');
  const [cartList, addCartList] = useState([]);
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
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}
