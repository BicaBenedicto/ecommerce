import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Context from '../services/Context';
import likeIcon from '../imgs/icons/like-icon.svg';
import unlikeIcon from '../imgs/icons/unlike-icon.svg';
import addCartIcon from '../imgs/icons/cart-add-icon.svg';
import checkCartIcon from '../imgs/icons/cart-check-icon.svg';
import '../css/ProductDetails.css';
import { actionFetchProduct, actionFetchComment } from '../redux/actions';

export default function ProductDetails() {
  const { login, cart } = useContext(Context);
  const dispatch = useDispatch();
  const [commentary, setCommentary] = useState('');
  const { pathname } = useLocation();
  const [, productId] = pathname.split('/products/');
  const [productActual, setProductActual] = useState({});
  const product = useSelector((s) => s.products.product);
  const user = useSelector((s) => s.user);

  useEffect(() => {
    dispatch(actionFetchProduct('getById', productId));
    dispatch(actionFetchComment('getByProduct', productId));
    const saveCartList = JSON.parse(localStorage.getItem('cart'));
    if (saveCartList) {
      cart.addCartList(saveCartList);
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    setProductActual(product);
  }, [product]);

  const onSendCommentButton = (e) => {
    e.preventDefault();
    const newCommentary = {
      comment: commentary,
      username: user.username,
      username_id: user.id,
      product_id: productId,
    };
    dispatch(actionFetchComment('create', newCommentary));
  };

  const addOrRemoveItemCart = (productItem) => {
    const haveItem = cart.cartList.some(({id}) => id === productItem.id);
    if(haveItem) {
      const newList = cart.cartList.filter(({id}) => id !== productItem.id);
      localStorage.setItem('cart', JSON.stringify(newList));
      return cart.addCartList(newList);
    }
    localStorage.setItem('cart', JSON.stringify([...cart.cartList, { ...productItem, quant: 1}]));
    return cart.addCartList([...cart.cartList, { ...productItem, quant: 1}]);
  };

  const renderListItems = (listItems) => {
      const {id, item_name, item_image, item_like, item_unlike, comments, price} = listItems;

      return (
        <div
          className='product-item'
          key={ id }
        >
          <h2 className='title'>{item_name}</h2>
          <img src={item_image} alt={item_name}/>
          <div>
            <button
              className='product-details'
            >
              <img src={ likeIcon } alt="like" />
              {item_like}
            </button>
            <button
              className='product-details'
              onClick={ () => addOrRemoveItemCart(listItems) }
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
              {item_unlike}
            </button>
          </div>
          <h2 className='title'>R$ {price.toFixed(2).toString().replace('.', ',')}</h2>
          <ul className="comments">
            { comments && comments.map((comment, index) => (
              <li key={ index }>
                <h4>{comment.username}</h4>
                <p>{comment.comment}</p>
              </li>
            )) }
            <li>
              <form onSubmit={ onSendCommentButton } className="comment-form">
                <div>
                  <h4>{user.username || 'Anônimo'}</h4>
                  <textarea
                    maxLength='400'
                    value={ commentary }
                    onChange={ (e) => setCommentary(e.target.value)}
                  />
                </div>
                <button type='submit'>Comentar</button>
              </form>
            </li>
          </ul>
        </div>
      );
  };

  return (
    <section className='product-main'>
        {!productActual.price ? <div>Carregando...</div> : renderListItems(productActual) }
    </section>
  );
}