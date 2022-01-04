import React, { useContext, useState } from 'react';
import { ITEMS_DEFAULT } from '../assets/data';
import { useLocation } from 'react-router';
import Context from '../services/Context';
import likeIcon from '../imgs/icons/like-icon.svg';
import unlikeIcon from '../imgs/icons/unlike-icon.svg';
import addCartIcon from '../imgs/icons/cart-add-icon.svg';
import checkCartIcon from '../imgs/icons/cart-check-icon.svg';
import '../css/ProductDetails.css';

export default function ProductDetails() {
  const { login, cart } = useContext(Context);
  const [commentary, setCommentary] = useState('');
  const { pathname } = useLocation();
  const [, products] = pathname.split('/products/');

  const addOrRemoveItemCart = (productItem) => {
    const haveItem = cart.cartList.some(({id}) => id === productItem.id);
    if(haveItem) {
      const newList = cart.cartList.filter(({id}) => id !== productItem.id);
      return cart.addCartList(newList);
    }
    return cart.addCartList([...cart.cartList, productItem]);
  }

  const renderListItems = (listItems = ITEMS_DEFAULT) => {
    return Object.keys(listItems).map((categorie) => (
    listItems[categorie].items
      .filter(({ id }) => Number(products) === id).map((productItem) => {
        const {id, name, image, like, unlike, comments, price} = productItem;
      return (<div
        className='product-item'
        key={ id }
      >
        <h2 className='title'>{name}</h2>
        <img src={image} alt={name}/>
        <div>
          <button
            className='product-details'
          >
            <img src={ likeIcon } alt="like" />
            {like}
          </button>
          <button
            className='product-details'
            onClick={ () => addOrRemoveItemCart(productItem) }
          >
            { cart.cartList.some((item) => item.id === id)
            ? <img src={ checkCartIcon } alt="check-cart"/> 
            : <img src={ addCartIcon } alt="add-cart"/>
            }
          </button>
          <button
            className='product-details'
          >
            <img src={ unlikeIcon } alt="unlike" />
            {unlike}
          </button>
        </div>
        <h2 className='title'>R$ {price.toFixed(2).toString().replace('.', ',')}</h2>
        <ul>
          { comments[0] && comments.map((comment, index) => (
            <li key={ index }>
              <h4>{comment.name}</h4>
              <p>{comment.message}</p>
            </li>
          )) }
          <li>
            <h4>{login.name}</h4>
            <textarea
              maxLength='400'
              value={ commentary }
              onChange={ (e) => setCommentary(e.target.value)}
            />
            <button type='submit'>Comentar</button>
          </li>
        </ul>
      </div>)
    })));
  };

  return (
    <section className='product-main'>
        { renderListItems() }
    </section>
  )
}