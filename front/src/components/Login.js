import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Context from '../services/Context';
import userIcon from '../imgs/icons/user-icon.svg';
import lockIcon from '../imgs/icons/lock-icon.svg';
import { actionFetchUser } from '../redux/actions';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useContext(Context);
  const { email, setEmail } = login;
  const [hasDisabled, toggleDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const [hasError, toggleHasError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const errorMessage = (type = email) => {
    const errorTypes = {
      email: (<h3>E-mail e/ou senha inválido</h3>),
      emailNotFound: (<h3>E-mail não encontrado</h3>),
    }
    return errorTypes[type];
  }

  useEffect(() => {
    const verifyEmailAndPassword = () => {
      const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  
      const MIN_PASSWORD = 6;
      const EMAIL_VERIFY = !EMAIL_REGEX.test(email) || !email;
      const PASSWORD_VERIFY = password.length < MIN_PASSWORD || !password;
      
      if(!EMAIL_VERIFY && !PASSWORD_VERIFY) {
        toggleHasError('');
        return toggleDisabled(false);
      }
      toggleHasError('email');
      return toggleDisabled(true);
    }

    verifyEmailAndPassword();
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(actionFetchUser('login', { email, password }));
    setIsLoading(true);
    const data = await fetch(`http://localhost:4000/user/${email}/${password}`);
    const results = await data.json();
    if (results) {
      toggleHasError('');
      setIsLoading(false);
      return navigate('/products');
    }
    setIsLoading(false);
    return toggleHasError('email');
  }

  return (
    <form onSubmit={ handleSubmit}>
      <label>
        <img src={ userIcon } alt="user-icon" className='icon-inputs' />
        <input
          type="email"
          placeholder='exemplo@email.com'
          value={ email }
          name="email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label>
        <img src={ lockIcon } alt="lock-icon" className='icon-inputs' />
        <input
          type="password"
          placeholder='******'
          value={ password }
          name="password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      { hasError && errorMessage(hasError)}
      { isLoading
      ? <h3>Carregando...</h3>
      : (
        <button
          type="submit"
          disabled={ hasDisabled }
        >
          Entrar
        </button>
      )}
    </form>
  )
}
