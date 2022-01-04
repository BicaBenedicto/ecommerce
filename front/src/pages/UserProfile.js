import React, { useContext, useState } from 'react';
import EndBar from '../components/EndBar';
import StartBar from '../components/StartBar';
import '../css/UserProfile.css';
import Context from '../services/Context';
import UserIcon from '../imgs/icons/user-icon.svg';

export default function UserProfile() {
  const { email, setEmail } = useContext(Context);
  const [newEmail, setEmailUser] = useState(email);
  const [photoUser, setPhotoUser] = useState(UserIcon);
  const [nameUser, setNameUser] = useState('Não informado');
  const [ageUser, setAgeUser] = useState('Não informado');
  const [genderUser, setGenderUser] = useState('Não informado');
  const [locationUser, setLocationUser] = useState('Não informado');
  const [editMode, toggleEditMode] = useState(false);

  const handleEditProfileButton = () => {
    toggleEditMode(!editMode);
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
      </section>
      <EndBar />
    </main>
  )
}
