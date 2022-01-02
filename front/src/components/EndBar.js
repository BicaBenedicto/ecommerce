import React from 'react';
import '../css/EndBar.css';
import homeIcon from '../imgs/icons/house-icon.svg';
import userIcon from '../imgs/icons/user-icon.svg';
import squareIcon from '../imgs/icons/square-icon.svg';

export default function EndBar() {
  return (
    <section className='end-bar'>
      <ul>
        <li className='home'>
          <img src={ homeIcon } alt='home'/>
        </li>
        <li className='category'>
          <img src={ squareIcon } alt='square'/>
          <img src={ squareIcon } alt='square'/>
          <img src={ squareIcon } alt='square'/>
          <img src={ squareIcon } alt='square'/>
        </li>
        <li className='user'>
          <img src={ userIcon } alt='user'/>
        </li>
      </ul>
    </section>
  )
}
