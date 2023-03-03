import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import loadThemes from './Theme/ThemeApi';
import loadCards from './Card/CardApi';
import Game from './Game';
import './App.scss';

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    loadThemes().then((themes) =>
      dispatch({ type: 'themes/loadThemes', payload: themes }),
    );
    loadCards().then((cards) => {
      dispatch({ type: 'cards/loadCard', payload: cards });
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Game />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
