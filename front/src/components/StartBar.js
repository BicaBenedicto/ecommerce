import React from 'react';
import searchIcon from '../imgs/icons/search-icon.svg';
import cartIcon from '../imgs/icons/cart-icon.svg';
import filterIcon from '../imgs/icons/filter-icon.svg';
import '../css/StartBar.css';

export default function StartBar() {
  return (
    <form className='start-bar'>
      <ul>
        <label>
          <input
            type="text"
          />
          <img src={ searchIcon } alt='search-icon' />
        </label>
        <li className='filter'>
          <img src={ filterIcon } alt='filter-icon' />
        </li>
        <li className='cart'>
          <img src={ cartIcon } alt='cart-icon' />
        </li>
      </ul>
    </form>
  )
}
