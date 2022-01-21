import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/EndBar.css';

export default function EndBar() {
  const navigate = useNavigate();

  const handleButton = (name) => {
    navigate(`/${name}`);
  }

  return (
    <section className='end-bar'>
      <ul>
        <li className='home'>
          <button
            type="button"
            onClick={ () => handleButton('products') }
          >
            <i className="bi-house-fill icone"></i>
          </button>
        </li>
        <li className='category'>
          <button
              type="button"
              onClick={ () => handleButton('categories') }
            >
            <i className="bi-square-fill square"></i>
            <i className="bi-square-fill square"></i>
            <i className="bi-square-fill square"></i>
            <i className="bi-square-fill square"></i>
          </button>
        </li>
        <li className='user'>
        <button
            type="button"
            onClick={ () => handleButton('user-profile') }
          >
            <i className="bi-person-fill icone"></i>
          </button>
        </li>
      </ul>
    </section>
  )
}
