import React, { useState } from 'react';
import Header from '../components/Header';
import Login from '../components/Login';
import AccountCreate from '../components/AccountCreate';
import '../css/Home.css';

export default function Home() {
  const [isCreatingAccount, toggleCreatingMode] = useState(false);

  const onButtonClick = () => {
    toggleCreatingMode(!isCreatingAccount);
  }
  return (
    <main>
      <Header />
      { isCreatingAccount
      ? <AccountCreate />
      : <Login />
      }
      <button
        type="button"
        onClick={ onButtonClick }
      >
        { isCreatingAccount ? 'Logar' : 'Cadastrar' }
      </button>
    </main>
  )
}
