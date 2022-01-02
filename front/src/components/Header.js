import React from 'react';
import logo from '../imgs/logo.png';
import '../css/Header.css';

export default function Header() {
  return (
    <header>
      <img src={ logo } alt='logo' className='logo' />
      <h1>E-commerce</h1>
    </header>
  )
}
