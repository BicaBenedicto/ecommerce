import React, { useContext } from 'react';
import { ITEMS_DEFAULT } from '../assets/data';
import likeIcon from '../imgs/icons/like-icon.svg';
import Context from '../services/Context';
import '../css/SearchItems.css';
import StartBar from './StartBar';
import EndBar from './EndBar';
import BackgroundLogo from './BackgroundLogo';

export default function SearchItems() {
  const { searchBar } = useContext(Context);
  const renderListItems = (listItems = ITEMS_DEFAULT) => {

    return Object.keys(listItems).map((categorie) => (
    listItems[categorie].items
      .filter(({ name }) => {
        if(searchBar.search) return name.toLowerCase().includes(searchBar.search.toLowerCase());
        return false;
      })
      .map(({name, image, like}, index) => (
      <div
        className='search-list-item'
        key={ index }
      >
        <div style={ { 'backgroundImage': `url(${image})` } }></div>
        <h2>{ name }</h2>
        <span>
          <img src={ likeIcon } alt="like" />
          {like}
        </span>
      </div>
    ))));
  };

  return (
    <>
      <StartBar />
      <BackgroundLogo />
        <section className='search-list-main'>
          <h2 className='title'>{searchBar.search}</h2>
          <div className='search-list'>
            { renderListItems() }
          </div>
        </section>
      <EndBar />
    </>
  )
}
