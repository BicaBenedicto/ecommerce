import React from 'react';
import EndBar from '../components/EndBar';
import StartBar from '../components/StartBar';
import CartList from '../components/CartList';

export default function Cart() {
  return (
    <main>
      <StartBar />
      <CartList />
      <EndBar />
    </main>
  )
}
