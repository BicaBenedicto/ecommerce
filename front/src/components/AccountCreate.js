import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Context from '../services/Context';
import { actionFetchUser } from '../redux/actions';

export default function AccountCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useContext(Context);
  const { email, setEmail } = login;
  const [hasDisabled, toggleDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('not-informed');
  const [location, setLocation] = useState('');
  const [hasError, toggleHasError] = useState('');
  const { email: emailValidation } = useSelector((s) => s.user);

  const errorMessage = (type = email) => {
    const errorTypes = {
      email: (<h3>E-mail e/ou senha inválido</h3>),
      emailUsed: (<h3>E-mail já utilizado</h3>),
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
    await dispatch(actionFetchUser('verifyByEmail', email));
    if(!emailValidation) {
      const newUser = {
        email,
        password,
        username,
        gender,
        age,
        location,
      }
      await dispatch(actionFetchUser('create', newUser));
      toggleHasError('');
      return navigate('/products');
    }
    return toggleHasError('emailUsed');
  }

  return (
    <form onSubmit={ handleSubmit}>
      <label>
        Email: 
        <input
          type="email"
          placeholder='exemplo@email.com'
          value={ email }
          name="email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label>
        Senha: 
        <input
          type="password"
          placeholder='******'
          value={ password }
          name="password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <label>
        Nome: 
        <input
          type="text"
          placeholder='Joana'
          value={ username }
          name="username"
          onChange={ ({ target }) => setUsername(target.value) }
        />
      </label>
      <label>
        Idade: 
        <input
          type="text"
          placeholder='30 anos'
          value={ age }
          name="age"
          onChange={ ({ target }) => setAge(target.value) }
        />
      </label>
      <label>
        Genêro: 
        <select
          type="text"
          value={ gender}
          name="gender"
          onChange={ ({ target }) => setGender(target.value) }
        >
          <option value="h-cis">Homem cisgênero</option>
          <option value="h-trans">Homem transgênero</option>
          <option value="m-cis">Mulher cisgênero</option>
          <option value="m-trans">Mulher transgênero</option>
          <option value="other">Outro</option>
          <option value="not-informed">Prefiro não informar</option>
        </select>
      </label>
      <label>
        Localidade:  
        <input
          type="text"
          placeholder='São Paulo'
          value={ location }
          name="location"
          onChange={ ({ target }) => setLocation(target.value) }
        />
      </label>
      { hasError && errorMessage(hasError)}
      <button
        type="submit"
        disabled={ hasDisabled }
      >
        Cadastrar
      </button>
    </form>
  )
}
