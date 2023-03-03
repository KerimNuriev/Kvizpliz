/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export default function Header(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.user);
  console.log(user);
  
  return (
    <>
      <div className="header">
        <NavLink to="/">
          <img src="./logo.png" alt="Music" />
        </NavLink>
        <h1>Привет дурик, name</h1>
        <ul>
          {user && (
            <>
            <h1>{`Привет, ${user.name}`}</h1>
            <li>
              <NavLink to="/logout">Выход</NavLink>
            </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <NavLink to="/login">Log</NavLink>{' '}
              </li>
              <li>
                <NavLink to="/registration">Reg</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}
