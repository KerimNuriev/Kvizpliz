import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import Card from './Card/Card';
// import type CardType from './Card/type/CardType';
import Theme from './Theme/Theme';

export default function Game(): JSX.Element {
  const dispatch = useDispatch();
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
