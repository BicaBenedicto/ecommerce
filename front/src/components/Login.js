import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Context from '../services/Context';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(Context);
  const { email, setEmail } = login;
  const [hasDisabled, toggleDisabled] = useState(true);
  const [password, setPassword] = useState('');

  useEffect(() => {
    verifyEmailAndPassword();
  }, [email, password]);

  const verifyEmailAndPassword = () => {
    const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    const MIN_PASSWORD = 6;
    const EMAIL_VERIFY = !EMAIL_REGEX.test(email) || !email;
    const PASSWORD_VERIFY = password.length < MIN_PASSWORD || !password;
    
    if(!EMAIL_VERIFY && !PASSWORD_VERIFY) {
      return toggleDisabled(false);
    }
    return toggleDisabled(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/products');
  }

  return (
    <form onSubmit={ handleSubmit}>
      <input
        type="email"
        placeholder='exemplo@email.com'
        value={ email }
        name="email"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        placeholder='******'
        value={ password }
        name="password"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="submit"
        disabled={ hasDisabled }
      >
        Entrar
      </button>
    </form>
  )
}
