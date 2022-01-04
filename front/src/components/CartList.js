import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import Context from '../services/Context';
import '../css/CartList.css';

export default function CartList() {
  const { cart } = useContext(Context);
  const { cartList: cartItems } = cart;
  const navigate = useNavigate();

  const onProductClick = (id) => {
    navigate(`/products/${id}`);
  }

  const renderListItems = () => {
    return cartItems
        .map(({name, image, id, quant, price}) => (
          <button
            className='cart-item'
            key={ id }
            onClick={ () => onProductClick(id) }
          >
            <div style={ { 'backgroundImage': `url(${image})` } }></div>
            <h2 className='product-name'>{ name }</h2>
            <h2 className='product-price'>R$ {price.toFixed(2).toString().replace('.', ',')}</h2>
            <i className="bi-cart-plus-fill icone-add"></i>
            <i className="bi-cart-dash-fill icone-sub"></i>
          </button>
    ));
  };

  return (
    <section className='cart-main'>
      <div className='cart'>
        { cart.cartList.length === 0
        ? <h1 className='title'>Seu carrinho está vazio</h1> 
        : renderListItems() }
      </div>
    </section>
  )
}
