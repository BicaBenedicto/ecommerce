import React from 'react';
import { ITEMS_DEFAULT } from '../assets/data';
import likeIcon from '../imgs/icons/like-icon.svg';
import '../css/SearchItems.css';
import { useLocation } from 'react-router';

export default function ItemsByCategory() {
  const { pathname } = useLocation();
  const [, category] = pathname.split('/categories/');
  const renderListItems = (listItems = ITEMS_DEFAULT) => {

    return listItems[category].items
      .map(({name, image, like}, index) => (
      <div
        className='category-list-item'
        key={ index }
      >
        <div style={ { 'backgroundImage': `url(${image})` } }></div>
        <h2>{ name }</h2>
        <span>
          <img src={ likeIcon } alt="like" />
          {like}
        </span>
      </div>
    ));
  };

  return (
    <section className='category-list-main'>
      <h2 className='title'>{ITEMS_DEFAULT[category].name}</h2>
      <div className='category-list'>
        { renderListItems() }
      </div>
    </section>
  )
}
