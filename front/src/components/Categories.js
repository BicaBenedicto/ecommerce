import React from 'react';
import { CATEGORIES_DEFAULT } from '../assets/data';
import '../css/Categories.css';

export default function Categories() {
  const renderCategories = (categories = CATEGORIES_DEFAULT) => (
    categories.map(({name, image}, index) => (
      <div
        className='category-item'
        key={ index }
      >
        <div style={ { 'backgroundImage': `url(${image})` } }></div>
        <h2>{ name }</h2>
      </div>
    ))
  )
  return (
    <section className='categories-main'>
      <h2 className='title'>Categorias</h2>
      <div className='categories'>
        { renderCategories() }
      </div>
    </section>
  )
}
