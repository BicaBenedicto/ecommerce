import React, { useState } from 'react';
import EndBar from '../components/EndBar';
import StartBar from '../components/StartBar';
import CategoryForm from '../components/CategoryForm';
import ProductForm from '../components/ProductForm';
import '../css/Settings.css';

export default function Settings() {
  const [formType, setFormType] = useState('category');
  const [selectedForm, setSelectedForm] = useState('');

  const selectForm = () => {
    switch(selectedForm) {
      case 'category':
        return (
          <CategoryForm />
        );
      case 'product':
        return (
          <ProductForm />
        );
      default:
        return (
          <h2 className="settings-message">Escolha o item que deseja adicionar/alterar ou remover</h2>
        );
    };
  };

  const onChangeFormType = (e) => {
    e.preventDefault();
    setSelectedForm(formType);
  };

  return (
    <main>
      <StartBar />
      <form
        onSubmit={ onChangeFormType }
        className="form-type-select"
      >
        <select
          value={ formType }
          onChange={ (e) => setFormType(e.target.value) }
        >
          <option value="category">Categoria</option>
          <option value="product">Produto</option>
        </select>
        <button
          type="submit"
        >
          Selecionar
        </button>
      </form>
      { selectForm() }
      <EndBar />
    </main>
  );
}
