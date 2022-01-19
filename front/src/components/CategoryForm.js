import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchCategories, actionCategories, actionFetchCategory,
  actionFetchProducts} from '../redux/actions';

export default function CategoryForm() {
  const dispatch = useDispatch();
  const categories = useSelector((s) => s.categories.categories);
  const [isEditing, toggleIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [categorySelected, selectCategory] = useState('CATEGORY_INIT');
  useEffect(() => {
    dispatch(actionFetchCategories('get'));
  }, []);

  useEffect(() => {
    if(categories[0]) selectCategory(categories[0].category);
  }, [categories])

  const onEditOrRemoveButton = (type) => {
    const newCategory = {
      category_name: nameInput,
      category_image: imageInput,
    };

    switch(type) {
      case 'edit':
        const categoriesEdited = categories.map((category) => {
          if (category.category === categorySelected) {
            return newCategory;
          }
          return category;
        });
        dispatch(actionCategories(categoriesEdited));
        toggleIsEditing(false);
        return dispatch(actionFetchCategory('update', categorySelected, newCategory));
      case 'remove':
        const newCategoryList = categories.filter((category) => category.category !== categorySelected);
        dispatch(actionCategories(newCategoryList));
        dispatch(actionFetchProducts('deleteByCategory', categorySelected));
        return dispatch(actionFetchCategory('delete', categorySelected));
      default:
        return null;
    }
  };

  const onAddCategoryButton = (e) => {
    e.preventDefault();
    const newCategory = {
      category: nameInput.toLowerCase().trim(),
      category_name: nameInput,
      category_image: imageInput,
    };
    dispatch(actionCategories([...categories, newCategory]));
    return dispatch(actionFetchCategory('create', newCategory));
  };

  const inputsRender = () => (
    <>
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
    </>
  );

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
          { inputsRender() }
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
        { inputsRender() }
        <button
          type="submit"
        >
          Adicionar
        </button>
      </div>
    </form>
  )
}
