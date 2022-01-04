import React from 'react';
import EndBar from '../components/EndBar';
import BackgroundLogo from '../components/BackgroundLogo';
import StartBar from '../components/StartBar';
import SearchItems from '../components/SearchItems';
import '../css/Products.css';

export default function SearchPage(props) {
  const search = props.search;
  return (
    <main>
      <StartBar />
      <BackgroundLogo />
      <SearchItems search={search}/>
      <EndBar />
    </main>
  )
}
