import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';

export default function Header(): JSX.Element {
  const user = { name: '123' };
  return (
    <>
      <div className="header">
        <h1>Невъебенное лого</h1>
        <h1>Привет дурик, name</h1>
        <ul>
          {user && (
            <li>
              <NavLink to="/out">Out нахуй</NavLink>
            </li>
          )}
          {!user && (
            <>
              <li>
                <NavLink to="/log">Log</NavLink>{' '}
              </li>
              <li>
                <NavLink to="/reg">Reg</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}
