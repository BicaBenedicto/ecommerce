import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITEMS_DEFAULT } from '../assets/data';
import likeIcon from '../imgs/icons/like-icon.svg';
import Context from '../services/Context';
import '../css/SearchItems.css';
import { actionFetchProducts } from '../redux/actions';

export default function SearchItems() {
  const { searchBar } = useContext(Context);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchProducts('getAllProducts'));
  }, []);
  const renderListItems = (listItems = ITEMS_DEFAULT) => {

    return listItems
      .filter(({ item_name }) => {
        if(searchBar.search) return item_name.toLowerCase().includes(searchBar.search.toLowerCase());
        return false;
      })
      .map(({item_name, item_image, item_like}, index) => (
      <div
        className='search-list-item'
        key={ index }
      >
        <div style={ { 'backgroundImage': `url(${item_image})` } }></div>
        <h2>{ item_name }</h2>
        <span>
          <img src={ likeIcon } alt="like" />
          {item_like}
        </span>
      </div>
    ));
  };

  const PRODUCTS = useSelector((s) => s.products.products);

  return (
    <section className='search-list-main'>
      <h2 className='title'>{searchBar.search}</h2>
      <div className='search-list'>
        {PRODUCTS.length === 0 ? <h2>Carregando</h2> :  renderListItems(PRODUCTS) }
      </div>
    </section>
  )
}
