import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');
  const contextValue = {
    login: {
      email,
      setEmail,
    },
    searchBar: {
      search,
      setSearch,
    }
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}
