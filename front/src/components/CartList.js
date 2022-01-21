import React, { useContext, useEffect } from 'react';
import Context from '../services/Context';
import '../css/CartList.css';
import CartItem from './CartItem';

export default function CartList() {
  const { cart } = useContext(Context);
  const { cartList: cartItems } = cart;

  useEffect(() => {
    const saveCartList = JSON.parse(localStorage.getItem('cart'));
    if (saveCartList) {
      cart.addCartList(saveCartList);
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, []);

  const renderListItems = () => {
    return cartItems
        .map(({item_name, item_image, id, price, quant}) => (
          <CartItem
            key={ id }
            name={ item_name }
            image={ item_image }
            id={ id }
            price={ price }
            quant={ quant }
          />
    ));
  };

  return (
    <section className='cart-main'>
      <div className='cart'>
        { cart.cartList.length === 0
        ? <h1 className='title'>Seu carrinho está vazio</h1> 
        : (
          <>
            {renderListItems()}
            <h2>Total de R$ {cartItems.reduce((acc, value) => acc + (value.quant * value.price), 0)
              .toFixed(2).toString().replace('.', ',')}</h2>
          </>
        ) }
      </div>
    </section>
  );
}
