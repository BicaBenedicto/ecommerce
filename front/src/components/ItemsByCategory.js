import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { ITEMS_DEFAULT } from '../assets/data';
import likeIcon from '../imgs/icons/like-icon.svg';
import '../css/SearchItems.css';
import { actionFetchProducts } from '../redux/actions';

export default function ItemsByCategory() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [, category] = pathname.split('/categories/');

  const onProductClick = (id) => {
    navigate(`/products/${id}`);
  }

  useEffect(() => {
    dispatch(actionFetchProducts('getByCategory', category));
  }, []);

  const renderListItems = (listItems = ITEMS_DEFAULT) => {

    return listItems
      .map(({item_name, item_image, item_like, price, id}, index) => (
        <button
          className='category-list-item'
          key={ index }
          onClick={ () => onProductClick(id)}
        >
          <div style={ { 'backgroundImage': `url(${item_image})` } }></div>
          <h2>{ item_name }</h2>
          <h3>R$ {price.toFixed(2).toString().replace('.', ',')}</h3>
          <span>
            <img src={ likeIcon } alt="like" />
            {item_like}
          </span>
        </button>
      ));
  };

  const PRODUCTS = useSelector((s) => s.products.products);

  return (
    <section className='category-list-main'>
      <h2 className='title'>{PRODUCTS.item_name}</h2>
      <div className='category-list'>
        {PRODUCTS.length === 0 ? <h2>Carregando</h2> : renderListItems(PRODUCTS) }
      </div>
    </section>
  )
}
