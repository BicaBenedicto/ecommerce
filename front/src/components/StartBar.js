import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import Context from '../services/Context';
import '../css/StartBar.css';
import logo from '../imgs/logo.png';


export default function StartBar() {
  const { searchBar } = useContext(Context);
  const { search, setSearch } = searchBar;
  const navigate = useNavigate();

  const handleButton = (name) => {
    navigate(`/${name}`);
  }

  return (
    <form className='start-bar' onSubmit={ () => navigate('/search')}>
      <ul className="menu-desktop">
        <li className='home'>
          <button
            type="button"
            onClick={ () => handleButton('products') }
          >
            <i className="bi-house-fill icone"></i>
            Home
          </button>
        </li>
        <li className='category'>
          <button
              type="button"
              onClick={ () => handleButton('categories') }
            >
              Categorias
          </button>
        </li>
        <li className='user'>
          <button
            type="button"
            onClick={ () => handleButton('user-profile') }
          >
            <i className="bi-person-fill icone"></i>
            Perfil
          </button>
        </li>
      </ul>
      <header className='header-logo'>
        <img src={ logo } alt='logo' className='logo' />
        <h1>E-commerce</h1>
      </header>
      <ul className="search-bar-desktop">
        <label>
          <input
            type="text"
            value={ search }
            onChange={ (e) => setSearch(e.target.value) }
          />
          <i className="bi-search search-icone"></i>
        </label>
        <li className='cart-icon'>
          <button type='button' onClick={ () => navigate('/cart') }>
            <i className="bi-cart3 icone"></i>
          </button>
        </li>
      </ul>
    </form>
  )
}
