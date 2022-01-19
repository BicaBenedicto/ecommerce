import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { CATEGORY_DEFAULT } from '../assets/data';
import { actionFetchCategories } from '../redux/actions';
import '../css/Categories.css';

export default function Categories(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickButton = (name) => {
    navigate(`/categories/${name}`);
  }

  useEffect(() => {
    dispatch(actionFetchCategories('get'));
  }, []);
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

  const CATEGORIES = useSelector((s) => s.categories.categories);

  return (
    <section className='categories-main'>
      <h2 className='title'>Categorias</h2>
      <div className='categories'>
        {CATEGORIES.length === 0 ? <h2>Carregando</h2> :  renderCategories(CATEGORIES) }
      </div>
    </section>
  )
}
