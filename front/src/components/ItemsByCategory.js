import React from 'react';
import { useNavigate } from 'react-router';
import { ITEMS_DEFAULT } from '../assets/data';
import likeIcon from '../imgs/icons/like-icon.svg';
import '../css/SearchItems.css';
import { useLocation } from 'react-router';

export default function ItemsByCategory() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [, category] = pathname.split('/categories/');

  const onProductClick = (id) => {
    navigate(`/products/${id}`);
  }

  const renderListItems = (listItems = ITEMS_DEFAULT) => {

    return listItems[category].items
      .map(({name, image, like, price, id}, index) => (
      <button
        className='category-list-item'
        key={ index }
        onClick={ () => onProductClick(id)}
      >
        <div style={ { 'backgroundImage': `url(${image})` } }></div>
        <h2>{ name }</h2>
        <h3>R$ {price.toFixed(2).toString().replace('.', ',')}</h3>
        <span>
          <img src={ likeIcon } alt="like" />
          {like}
        </span>
      </button>
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
