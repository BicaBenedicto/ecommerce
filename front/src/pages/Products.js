import React from 'react';
import EndBar from '../components/EndBar';
import Header from '../components/Header';
import StartBar from '../components/StartBar';
import '../css/Home.css';

export default function Home() {
  return (
    <main>
      <Header />
      <StartBar />
      <EndBar />
    </main>
  )
}
