import React from 'react';
import EndBar from '../components/EndBar';
import BackgroundLogo from '../components/BackgroundLogo';
import StartBar from '../components/StartBar';
import ItemsByCategory from '../components/ItemsByCategory';
import '../css/ProductsByCategory.css';

export default function ProductsByCategory() {
  return (
    <main>
      <StartBar />
      <BackgroundLogo />
      <ItemsByCategory />
      <EndBar />
    </main>
  )
}
