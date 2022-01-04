import React from 'react';
import EndBar from '../components/EndBar';
import BackgroundLogo from '../components/BackgroundLogo';
import StartBar from '../components/StartBar';
import Categories from '../components/Categories';
import '../css/Products.css';

export default function CategoriesPage() {
  return (
    <main>
      <StartBar />
      <BackgroundLogo />
      <Categories/>
      <EndBar />
    </main>
  )
}
