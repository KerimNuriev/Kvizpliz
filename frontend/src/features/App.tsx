import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './Header';

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Route index element={<Main />} />
          <Route path="/game" element={<Game />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
