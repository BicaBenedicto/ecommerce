import React from 'react';
import { ITEMS_DEFAULT } from '../assets/data';
import likeIcon from '../imgs/icons/like-icon.svg';
import '../css/PopularItems.css';

export default function PopularItems() {
  const renderListItems = (listItems = ITEMS_DEFAULT) => (
    Object.keys(listItems).map((categorie) => (
    listItems[categorie].sort((a, b) => b.like - a.like)
      .filter(({ like }, index) => index <= 1 && like !== 0).map(({name, image, like}, index) => (
      <div
        className='list-item'
        key={ index }
      >
        <div style={ { 'backgroundImage': `url(${image})` } }></div>
        <h2>{ name }</h2>
        <span>
          <img src={ likeIcon } alt="like" />
          {like}
        </span>
      </div>
    ))))
  )
  return (
    <section className='list-main'>
      <h2 className='title'>Populares</h2>
      <div className='list'>
        { renderListItems() }
      </div>
    </section>
  )
}
