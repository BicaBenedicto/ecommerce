import React from 'react';
import { useNavigate } from 'react-router';
import { CATEGORY_DEFAULT } from '../assets/data';
import '../css/Categories.css';

export default function Categories(props) {
  const navigate = useNavigate();
  const onClickButton = (name) => {
    navigate(`/categories/${name}`);
  }
  const renderCategories = (categories = CATEGORY_DEFAULT) => {
    const QUANT = (!props.quant ? categories.length : props.quant);
    return categories.filter((_item, index) => index < QUANT)
      .map(({category_name, category_image, category}, index) => (
      <button
        className='category-item'
        key={ index }
        onClick={ () => onClickButton(category)}
      >
        <div style={ { 'backgroundImage': `url(${category_image})` } }></div>
        <h2>{ category_name }</h2>
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
