import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { ITEMS_DEFAULT } from '../assets/data';
import likeIcon from '../imgs/icons/like-icon.svg';
import '../css/PopularItems.css';
import { actionFetchProducts } from '../redux/actions';

export default function PopularItems(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onProductClick = (id) => {
    navigate(`/products/${id}`);
  }

  useEffect(() => {
    dispatch(actionFetchProducts('getAllProducts'));
  }, []);
  const renderListItems = (listItems = ITEMS_DEFAULT) => {
    const QUANT = (!props.quant ? Object.keys(listItems).length : props.quant);

    return listItems.sort((a, b) => b.item_like - a.item_like)
      .filter(({ item_like }, index) => (index + 1) <= QUANT && item_like !== 0)
        .map(({ item_name, item_image, item_like, id, price }, index) => (
      <button
        className='list-item'
        onClick={ () => onProductClick(id) }
        key={ index }
      >
        <div style={ { 'backgroundImage': `url(${item_image})` } }></div>
        <h2>{ item_name }</h2>
        <h3>R$ { price.toFixed(2).toString().replace('.', ',') }</h3>
        <span>
          <img src={ likeIcon } alt="like" />
          { item_like }
        </span>
      </button>
    ));
  };

  const PRODUCTS = useSelector((s) => s.products.products);

  return (
    <section className='list-main'>
      <h2 className='title'>Populares</h2>
      <div className='list'>
        {PRODUCTS.length === 0 ? <h2>Carregando</h2> :  renderListItems(PRODUCTS) }
      </div>
    </section>
  )
}
