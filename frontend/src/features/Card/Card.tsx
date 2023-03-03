import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import type CardType from './type/CardType';

function Card({ card }: { card: CardType }): JSX.Element {
  const [status, setStatus] = useState(false);
  // const cardList = useSelector((state: RootState) => state.cards.cardList);

  return (
    <>
      <div className="cardContainer">
        {!status ? (
          <button
            type="button"
            className="card"
            onClick={() => setStatus(true)}
          >
            {card.price}
          </button>
        ) : (
          <button
            type="button"
            className="card"
            onClick={() => setStatus(true)}
            disabled
          >
            {card.price}
          </button>
        )}
      </div>
      <form>
        <div className="modalWindow">
          <img
            alt="Нотка половинная"
            src="https://e7.pngegg.com/pngimages/82/843/png-clipart-musical-note-musical-note-text-logo.png"
          />
          {/* <audio src={card.source} autoPlay /> */}
          <input placeholder="Введите название песни" />
          <button type="submit">Проверка</button>
        </div>
      </form>
    </>
  );
}

export default Card;
