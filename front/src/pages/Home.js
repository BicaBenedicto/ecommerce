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
      <div className="login-body">
        { isCreatingAccount
        ? <AccountCreate />
        : <Login />
        }
        <button
          type="button"
          onClick={ onButtonClick }
          className="login-button"
        >
          { isCreatingAccount ? 'Logar' : 'Cadastrar' }
        </button>
      </div>
    </main>
  )
}
