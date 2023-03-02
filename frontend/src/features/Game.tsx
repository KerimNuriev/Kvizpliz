import React from 'react';
import Card from './Card/Card';
import Theme from './Theme/Theme';

export default function Game(): JSX.Element {
  const theme = { id: 1 };
  const card = { id: 1 };
  return (
    <div className="board">
      {/* <div className="themes">
        {themes.map((theme) => { */}
      <Theme key={theme.id} />;{/* //   })} */}
      {/* // </div> */}
      {/* // <div className="cards"> */}
      {/* //   {cards.map((card) => { */}
      <Card key={card.id} />;{/* // })} */}
      {/* // </div> */}
    </div>
  );
}
