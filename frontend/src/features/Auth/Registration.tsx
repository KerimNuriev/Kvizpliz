/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as UserApi from './UserApi';
import type { RootState } from '../../store';
import './Form.scss';

function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();

  const { user, message } = useSelector((store: RootState) => store.user);

  const registr = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    UserApi.registr({ name, password, email }).then((data) =>
      dispatch({
        type: 'REG_USER',
        payload: data,
      })
    );
    if (user !== null) {
      nav('/');
    } else {
      document.querySelector('#error')!.innerHTML = message;
    }
  };
  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={registr}
      >
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Почта</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password2">Подтвердите пароль</label>
        <input
          id="password2"
          name="password2"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <p id="error" />
        <button type="submit" className="button-color">
          Регистрация
        </button>
      </form>
    </div>
  );
}

export default Registration;
