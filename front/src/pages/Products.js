import React from 'react';
import EndBar from '../components/EndBar';
import BackgroundLogo from '../components/BackgroundLogo';
import StartBar from '../components/StartBar';
import Categories from '../components/Categories';
import PopularItems from '../components/PopularItems';
import '../css/Products.css';

export default function Home() {
  return (
    <main>
      <StartBar />
      <BackgroundLogo />
      <Categories quant={4}/>
      <PopularItems quant={3}/>
      <EndBar />
    </main>
  )
}
