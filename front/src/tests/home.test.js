import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';

const EMAIL = 'exemplo@email.com';
const WRONG_EMAIL = 'abc@email';
const WRONG_EMAIL_2 = 'abcemail.com';
const WRONG_EMAIL_3 = 'abcemail@.com';
const PASSWORD_SEARCH = '******'
const PASSWORD = 'abc123'
const WRONG_PASSWORD = 'abc12';

describe('verify homepage have correct elements and actions expected', () => {
  it('have login inputs', () => {
    render(<App />);

    const [inputEmail] = screen.queryAllByPlaceholderText(EMAIL, 'input');
    const [inputPassword] = screen.queryAllByPlaceholderText(PASSWORD_SEARCH, 'input');

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
  });

  it('have verify in email and password', () => {
    render(<App />);

    const [inputEmail] = screen.queryAllByPlaceholderText(EMAIL, 'input');
    const [inputPassword] = screen.queryAllByPlaceholderText(PASSWORD_SEARCH, 'input');
    const button = screen.getByRole('button', { name: 'Entrar' });

    expect(button).toBeDisabled();

    fireEvent.change(inputEmail, { target: { value: WRONG_EMAIL }});

    expect(button).toBeDisabled();

    fireEvent.change(inputPassword, { target: { value: PASSWORD }});

    expect(button).toBeDisabled();

    fireEvent.change(inputEmail, { target: { value: WRONG_EMAIL_2 }});

    expect(button).toBeDisabled();

    fireEvent.change(inputEmail, { target: { value: WRONG_EMAIL_3 }});

    expect(button).toBeDisabled();

    fireEvent.change(inputPassword, { target: { value: WRONG_PASSWORD }});

    expect(button).toBeDisabled();

    fireEvent.change(inputEmail, { target: { value: EMAIL }});

    expect(button).toBeDisabled();

    fireEvent.change(inputPassword, { target: { value: PASSWORD }});

    expect(button).not.toBeDisabled();
  });

  it('redirect in login button', () => {
    render(<App />);

    const [inputEmail] = screen.queryAllByPlaceholderText(EMAIL, 'input');
    const [inputPassword] = screen.queryAllByPlaceholderText(PASSWORD_SEARCH, 'input');
    const button = screen.getByRole('button', { name: 'Entrar' });

    expect(button).toBeDisabled();

    fireEvent.change(inputEmail, { target: { value: EMAIL }});
    fireEvent.change(inputPassword, { target: { value: PASSWORD }});

    expect(button).not.toBeDisabled();

    fireEvent.click(button);

    expect(inputEmail).not.toBeInTheDocument();
    expect(inputPassword).not.toBeInTheDocument();
  })
})
