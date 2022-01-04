import React from 'react';
import EndBar from '../components/EndBar';
import BackgroundLogo from '../components/BackgroundLogo';
import StartBar from '../components/StartBar';
import ProductDetails from '../components/ProductDetails';

export default function Details() {
  return (
    <main>
      <StartBar />
      <BackgroundLogo />
      <ProductDetails />
      <EndBar />
    </main>
  )
}
