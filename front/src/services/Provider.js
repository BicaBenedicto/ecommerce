import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [email, setEmail] = useState('');
  const contextValue = {
    login: {
      email,
      setEmail,
    },
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}
