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
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => {
    dispatch(actionFetchCategories('get'));
    dispatch(actionFetchProducts('getAllProducts'));
  }, []);

  useEffect(() => {
    if (products[0] && !productSelected) selectProduct(products[0].id);
    if (categories[0] && !categorySelected) selectCategory(categories[0].category);
  }, [categorySelected, productSelected, categories, products]);

  const onEditOrRemoveButton = (type) => {
    const newProduct = {
      id: productSelected,
      price: priceInput,
      item_name: nameInput,
      item_image: imageInput,
      category: categorySelected,
    };

    switch(type) {
      case 'edit':
        const categoriesEdited = categories.map((product) => {
          if (Number(product.id === productSelected)) {
            return {...newProduct, item_likes: product.item_likes, item_unlikes: product.item_unlikes};
          }
          return product;
        });
        dispatch(actionProducts(categoriesEdited));
        toggleIsEditing(false);
        return dispatch(actionFetchProduct('update', productSelected, newProduct));
      case 'remove':
        const newProductList = categories.filter((category) => category.category !== productSelected);
        dispatch(actionProducts(newProductList));
        return dispatch(actionFetchProduct('delete', productSelected));
      default:
        return null;
    }
  };

  const onAddCategoryButton = (e) => {
    e.preventDefault();
    const newProduct = {
      id: priceInput * imageInput.length || nameInput.length,
      price: priceInput,
      item_name: nameInput,
      item_image: imageInput,
      item_likes: 0,
      item_unlikes: 0,
      category: categorySelected,
    };
    dispatch(actionProducts([...products, newProduct]));
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
      { categories[0]
      ? <>
      { products[0]
      && <div>
        <label htmlFor="filter-category">
          Filtrar por categoria: 
          <select
            id="filter-category"
            value={ categoryFilter }
            onChange={ (e) => setCategoryFilter(e.target.value) }
          >
            {products.concat({ category: 'All', category_name: 'All'}).map((category) => (
              <option value={ category.category }>{ category.category_name}</option>
            ))}
          </select>
        </label>
        <label htmlFor="filter-products">
          Produtos: 
          <select
            id="filter-products"
            value={ productSelected }
            onChange={ (e) => selectProduct(e.target.value) }
          >
            {products.filter((({ category }) => {
              if (categoryFilter === 'All') {
                return true;
              };
              return category === categoryFilter;
            })).map((product) => (
              <option value={ product.id }>{ product.item_name}</option>
            ))}
          </select>
        </label>
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
      </>
      : <h2>Adicione uma categoria para conectar os produtos</h2>}
    </form>
  );
}
