import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Context from '../services/Context';

export default function CartItem({name: productName, image, id, price, quant}) {
  const { cart } = useContext(Context);
  const { cartList, addCartList } = cart;
  const [showDelButton, toggleDelButton] = useState(false);
  const navigate = useNavigate();

  const onProductClick = (id) => {
    navigate(`/products/${id}`);
  }

  const onAddOrSubItem = (type) => {
    const newItem = cartList.find((cartItem) => cartItem.id === id);
    const newList = cart.cartList;
    if (type === 'add') {
      const addList = newList.map((cartItem) => {
        if (cartItem.id === id) {
          toggleDelButton(false);
          return ({...newItem, quant: newItem.quant + 1});
        }
        return cartItem
      })
      localStorage.setItem('cart', JSON.stringify(addList));
      return addCartList(addList);
    }
    const subList = newList.map((cartItem) => {
      if (newItem.quant === 1) toggleDelButton(true);
      if (cartItem.id === id) {
        return ({...newItem, quant: (newItem.quant !== 1 ? newItem.quant - 1 : newItem.quant)});
      }
      return cartItem
    })
    localStorage.setItem('cart', JSON.stringify(subList));
    return addCartList(subList);
  }

  const removeItemCart = () => {
    const newList = cart.cartList.filter((productItem) => Number(id !== productItem.id));
    localStorage.setItem('cart', JSON.stringify(newList));
    return cart.addCartList(newList);
  }

  return (
    <div
      className='cart-item'
      key={ id }
    >
      <div style={ { 'backgroundImage': `url(${image})` } }></div>
      <button 
        type="button"
        onClick={ () => onProductClick(id) }
        className='product-name'
      >
        { productName }
      </button>
      <h2 className='product-price'>R$ {price.toFixed(2).toString().replace('.', ',')}</h2>
      <h2 className='product-total-price'>R$ {(quant * price).toFixed(2).toString().replace('.', ',')}</h2>
      {showDelButton && <button onClick={ removeItemCart }>
        <i className="bi-cart-x-fill icone-del"/>
      </button>}
      <h2 className='product-quant'>{quant}</h2>
      <button onClick={ () => onAddOrSubItem('add')} type='button'>
        <i className="bi-cart-plus-fill icone-add"></i>
      </button>
      <button onClick={ () => onAddOrSubItem('sub')} type='button'>
        <i className="bi-cart-dash-fill icone-sub"></i>
      </button>
    </div>
);
}
