import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EndBar from '../components/EndBar';
import StartBar from '../components/StartBar';
import '../css/UserProfile.css';
import Context from '../services/Context';
import UserIcon from '../imgs/icons/user-icon.svg';
import { actionFetchUser, actionUser } from '../redux/actions';
import { useNavigate } from 'react-router';

export default function UserProfile() {
  const { login } = useContext(Context);
  const { setEmail } = login;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, username, email, gender, location, age } = useSelector((s) => s.user);
  const [newEmail, setEmailUser] = useState(email);
  const [photoUser] = useState(UserIcon);
  const [nameUser, setNameUser] = useState(username);
  const [ageUser, setAgeUser] = useState(age);
  const [password, setPassword] = useState('');
  const [genderUser, setGenderUser] = useState(gender);
  const [locationUser, setLocationUser] = useState(location);
  const [editMode, toggleEditMode] = useState(false);

  const handleEditProfileButton = () => {
    toggleEditMode(!editMode);
    if(toggleEditMode) {
      const perfilUpdated = {
        id,
        username: nameUser,
        password,
        email: newEmail,
        age: ageUser,
        gender: genderUser,
        location: locationUser,
      }
      dispatch(actionFetchUser('update', id, perfilUpdated));
      setEmail(newEmail);
    }
  }

  return (
    <main>
      <StartBar />
      <section className='user-profile'>
        {editMode ? (
          <>
            <div>
            <button
              type="button"
              className='edit-profile'
              onClick={ handleEditProfileButton }
            >
              <h4>Salvar</h4>
              <i className="bi-pencil-square icone"></i>
            </button>
            </div>
            <img src={ photoUser } alt={ nameUser} className='user-photo' />
            <label>
              E-mail:
              <input
                type='email'
                value={ newEmail }
                onChange={ ({target}) => setEmailUser(target.value)}
                name='email'
              />
            </label>
            <label>
              Senha:
              <input
                type='password'
                value={ password }
                onChange={ ({target}) => setPassword(target.value)}
                name='email'
              />
            </label>
            <label>
              Nome:
              <input
                  type='text'
                  value={ nameUser }
                  onChange={ ({target}) => setNameUser(target.value)}
                  name='name'
              />
            </label>
            <label>
              Idade:
              <input
                  type='text'
                  value={ ageUser }
                  onChange={ ({target}) => setAgeUser(target.value)}
                  name='age'
              />
            </label>
            <label>
              Gênero:
              <input
                  type='text'
                  value={ genderUser }
                  onChange={ ({target}) => setGenderUser(target.value)}
                  name='gender'
              />
            </label>
            <label>Local:
              <input
                  type='text'
                  value={ locationUser }
                  onChange={ ({target}) => setLocationUser(target.value)}
                  name='location'
              />
            </label>
          </>
        )
        : (
          <>
            <div>
              <button
                type="button"
                className='edit-profile'
                onClick={ handleEditProfileButton }
              >
                <h4>Editar</h4>
                <i className="bi-pencil-square icone"></i>
              </button>
            </div>
            <img src={ photoUser } alt={ nameUser} className='user-photo' />
            <h3>E-mail: {email}</h3>
            <h3>Nome: {nameUser}</h3>
            <h3>Idade: {ageUser}</h3>
            <h3>Gênero: {genderUser}</h3>
            <h3>Local: {locationUser}</h3>
          </>
        )}
        <button
          type="submit"
          onClick={ () => {
            dispatch(actionUser({}));
            navigate('/');
          }}
        >
          Sair
        </button>
      </section>
      <EndBar />
    </main>
  )
}
