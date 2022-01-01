import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../App';

describe('verify homepage have correct elements and actions expected', () => {
  it('have login inputs', () => {
    render(<App />);

    const [inputEmail] = screen.queryAllByPlaceholderText('exemplo@email.com', 'input');
    const [inputPassword] = screen.queryAllByPlaceholderText('********', 'input');

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  it('have header component with logo', () => {
    render(<App />);

    const header = screen.queryByRole('heading', { name: 'E-commerce', level: 1 });
    const [logo] = screen.queryAllByRole('img');

    expect(header).toBeInTheDocument();
    expect(logo).toBeInTheDocument();

    expect(logo).toHaveAttribute('src', /logo/i);
    expect(logo).toHaveAttribute('alt', /logo/i);
  })
})
