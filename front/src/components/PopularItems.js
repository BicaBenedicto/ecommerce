import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ITEMS_DEFAULT } from '../assets/data';
import likeIcon from '../imgs/icons/like-icon.svg';
import '../css/PopularItems.css';
import Context from '../services/Context';

export default function PopularItems(props) {
  const { products } = useContext(Context);
  const navigate = useNavigate();

  const onProductClick = (id) => {
    navigate(`/products/${id}`);
  }
  const renderListItems = (listItems = ITEMS_DEFAULT) => {
    const QUANT = (!props.quant ? Object.keys(listItems).length : props.quant);

    return listItems.sort((a, b) => b.like - a.like)
      .filter(({ like }, index) => (index + 1) <= QUANT && like !== 0)
        .map(({ name, image, like, id, price }, index) => (
      <button
        className='list-item'
        onClick={ () => onProductClick(id) }
        key={ index }
      >
        <div style={ { 'backgroundImage': `url(${image})` } }></div>
        <h2>{ name }</h2>
        <h3>R$ { price.toFixed(2).toString().replace('.', ',') }</h3>
        <span>
          <img src={ likeIcon } alt="like" />
          { like }
        </span>
      </button>
    ));
  };

  return (
    <section className='list-main'>
      <h2 className='title'>Populares</h2>
      <div className='list'>
        { renderListItems(products.products) }
      </div>
    </section>
  )
}
