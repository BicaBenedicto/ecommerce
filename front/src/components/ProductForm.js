import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchProducts, actionProducts, actionFetchProduct,
  actionFetchCategories } from '../redux/actions';

export default function ProductForm() {
  const dispatch = useDispatch();
  const categories = useSelector((s) => s.categories.categories);
  const products = useSelector((s) => s.products.products);
  const [productSelected, selectProduct] = useState('');
  const [categorySelected, selectCategory] = useState('');
  const [isEditing, toggleIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [priceInput, setPriceInput] = useState(0);

  useEffect(() => {
    dispatch(actionFetchCategories('get'));
    dispatch(actionFetchProducts('getAllProducts'));
  }, []);

  const onEditOrRemoveButton = (type) => {
    const newProduct = {
      price: priceInput,
      item_name: nameInput,
      item_image: imageInput,
      item_likes: 0,
      item_unlike: 0,
      category: categorySelected,
    };

    switch(type) {
      case 'editar':
        const categoriesEdited = categories.map((product) => {
          if (product.id === productSelected) {
            return newProduct;
          }
          return product;
        });
        actionProducts(categoriesEdited);
        toggleIsEditing(false);
        return dispatch(actionFetchProduct('update', productSelected, newProduct));
      case 'remover':
        const newProductList = categories.filter((category) => category.category !== productSelected);
        actionProducts(newProductList);
        return dispatch(actionFetchProduct('delete', productSelected));
      default:
        return null;
    }
  };

  const onAddCategoryButton = (e) => {
    e.preventDefault();
    const newProduct = {
      category: nameInput.trim().toLowerCase(),
      category_name: nameInput,
      category_image: imageInput,
    };
    actionProducts([...categories, newProduct]);
    return dispatch(actionFetchProduct('create', newProduct));
  };

  const inputsRender = () => (
    <>
      <select
        value={ categorySelected }
        onChange={ (e) => selectCategory(e.target.value) }
      >
        {categories.map((category) => (
          <option value={ category.category }>{ category.category_name }</option>
        ))}
      </select>
      <label htmlFor="name-input">
        Nome do produto: 
        <input
          type="text"
          id="name-input"
          value={ nameInput }
          onChange={ (e) => setNameInput(e.target.value) }
        />
      </label>
      <label htmlFor="price-input">
        Preço do produto: 
        <input
          type="number"
          id="price-input"
          value={ priceInput }
          onChange={ (e) => setPriceInput(e.target.value) }
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
      { products.length !== 0
      && <div>
        <select
          value={ productSelected }
          onChange={ (e) => selectProduct(e.target.value) }
        >
          {products.map((product) => (
            <option value={ product.id }>{ product.item_name}</option>
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
  );
}
