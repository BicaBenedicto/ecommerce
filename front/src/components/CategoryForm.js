import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchCategories, actionCategories, actionFetchCategory } from '../redux/actions';

export default function CategoryForm() {
  const dispatch = useDispatch();
  const categories = useSelector((s) => s.categories.categories);
  const [categorySelected, selectCategory] = useState('');
  const [isEditing, toggleIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [imageInput, setImageInput] = useState('');

  useEffect(() => {
    dispatch(actionFetchCategories('get'));
  }, []);

  const onEditOrRemoveButton = (type) => {
    const newCategory = {
      category: nameInput.trim().toLowerCase(),
      category_name: nameInput,
      category_image: imageInput,
    };

    switch(type) {
      case 'editar':
        const categoriesEdited = categories.map((category) => {
          if (category.category === categorySelected) {
            return newCategory;
          }
          return category;
        });
        actionCategories(categoriesEdited);
        toggleIsEditing(false);
        return dispatch(actionFetchCategory('update', categorySelected, newCategory));
      case 'remover':
        const newCategoryList = categories.filter((category) => category.category !== categorySelected);
        actionCategories(newCategoryList);
        return dispatch(actionFetchCategory('delete', categorySelected));
      default:
        return null;
    }
  };

  const onAddCategoryButton = (e) => {
    e.preventDefault();
    const newCategory = {
      category: nameInput.trim().toLowerCase(),
      category_name: nameInput,
      category_image: imageInput,
    };
    actionCategories([...categories, newCategory]);
    return dispatch(actionFetchCategory('create', newCategory));
  };

  return (
    <form onSubmit={ onAddCategoryButton }>
      { categories.length !== 0
      && <div>
        <select
          value={ categorySelected }
          onChange={ (e) => selectCategory(e.target.value) }
        >
          {categories.map((category) => (
            <option value={ category.category }>{ category.category_name}</option>
          ))}
        </select>
        {isEditing
        ? <>
          <input
            type="text"
            value={ nameInput }
            onChange={ (e) => setNameInput(e.target.value) }
          />
          <input
            type="text"
            value={ imageInput }
            onChange={ (e) => setImageInput(e.target.value) }
          />
          <button
            type="button"
            onClick={ () => onEditOrRemoveButton('edit') }
          >
            Salvar
          </button>
        </>
        : <>
          <button
            type="button"
            onClick={ () => toggleIsEditing(true) }
          >
            Editar
          </button>
          <button
            type="button"
            onClick={ () => onEditOrRemoveButton('remove') }
          >
            Remover
          </button>
        </>}
      </div>}
      <div>
        <label htmlFor="name-input">
          Nome da categoria: 
          <input
            type="text"
            id="name-input"
            value={ nameInput }
            onChange={ (e) => setNameInput(e.target.value) }
          />
        </label>
        <label htmlFor="image-input">
          URL da imagem: 
          <input
            type="text"
            id="image-input"
            value={ imageInput }
            onChange={ (e) => setImageInput(e.target.value) }
          />
        </label>
        <button
          type="submit"
        >
          Adicionar
        </button>
      </div>
    </form>
  )
}
