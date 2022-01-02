import React from 'react';
import logo from '../imgs/logo.png';
import '../css/BackgroundLogo.css';

export default function BackgroundLogo() {
  return (
    <header className='background-logo'>
      <img src={ logo } alt='logo' className='logo' />
      <h1>E-commerce</h1>
    </header>
  )
}
