/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as UserApi from "./UserApi";
import type { RootState } from '../../store';

function Authorization(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { user, message } = useSelector((store: RootState) => store.user);

  const login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    UserApi.login({ password, name }).then((data) =>
      dispatch({
        type: 'LOG_USER',
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
        onSubmit={login}
      >
        <label htmlFor="type">Имя</label>
        <input
          id="type"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="img">Пароль</label>
        <input
          id="img"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="button-color">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Authorization;
