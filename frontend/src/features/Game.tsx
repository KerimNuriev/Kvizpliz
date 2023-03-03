import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Card from './Card/Card';
import Theme from './Theme/Theme';

export default function Game(): JSX.Element {

  const cardList = useSelector((state: RootState) => state.cards.cardList);
  const themeList = useSelector((state: RootState) => state.themes.themeList);
  return (
    <div className="board">
      <div className="themes">
        {themeList.map((theme) => (
          <Theme key={theme.id} theme={theme} />
        ))}
      </div>
      <div className="cards">
        {cardList.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
