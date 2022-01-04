import React from 'react';
import { useNavigate } from 'react-router';
import { ITEMS_DEFAULT } from '../assets/data';
import '../css/Categories.css';

export default function Categories(props) {
  const ITEMS_INIT = Object.keys(ITEMS_DEFAULT).map((item) => ({...ITEMS_DEFAULT[item], keyItem: item}));
  const navigate = useNavigate();
  const onClickButton = (name) => {
    navigate(`/categories/${name}`);
  }
  const renderCategories = (categories = ITEMS_INIT) => {
    const QUANT = (!props.quant ? categories.length : props.quant);
    return categories.filter((_item, index) => index < QUANT).map(({name, image, keyItem}, index) => (
      <button
        className='category-item'
        key={ index }
        onClick={ () => onClickButton(keyItem)}
      >
        <div style={ { 'backgroundImage': `url(${image})` } }></div>
        <h2>{ name }</h2>
      </button>
    ))
  }
  return (
    <section className='categories-main'>
      <h2 className='title'>Categorias</h2>
      <div className='categories'>
        { renderCategories() }
      </div>
    </section>
  )
}
