import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import loadThemes from './Theme/ThemeApi';
import loadCards from './Card/CardApi';
import Game from './Game';
import Logout from './Auth/Logout';
import Authorization from './Auth/Authorization';
import Registration from './Auth/Registration';
import * as api from "./Auth/UserApi"

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    loadThemes().then((themes) =>
      dispatch({ type: 'themes/loadThemes', payload: themes }),
    );
    loadCards().then((cards) => {
      dispatch({ type: 'cards/loadCard', payload: cards });
      api.getUsers()
      .then((data) => dispatch({ type: 'INIT_USERS', payload: data }));
    });
  }, [dispatch]);

  useEffect(() => {
    api
      .checkUser()
      .then((data) => dispatch({ type: 'LOG_USER', payload: data }));
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Route index element={<Main />} /> */}
          <Route path="/" element={<Game />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
