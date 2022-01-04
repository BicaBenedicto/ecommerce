import React, { useContext } from 'react';
import '../css/StartBar.css';
import Context from '../services/Context';
import { useNavigate } from 'react-router';

export default function StartBar() {
  const { searchBar } = useContext(Context);
  const { search, setSearch } = searchBar;
  const navigate = useNavigate();
  return (
    <form className='start-bar' onSubmit={ () => navigate('/search')}>
      <ul>
        <label>
          <input
            type="text"
            value={ search }
            onChange={ (e) => setSearch(e.target.value) }
          />
          <i className="bi-search search-icone"></i>
        </label>
        <li className='filter-icon'>
          <i className="bi-funnel-fill icone"></i>
        </li>
        <li className='cart-icon'>
          <button type='button' onClick={ () => navigate('/cart') }>
            <i className="bi-cart3 icone"></i>
          </button>
        </li>
      </ul>
    </form>
  )
}
