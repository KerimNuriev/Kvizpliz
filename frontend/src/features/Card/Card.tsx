import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import type CardType from './type/CardType';

function Card({ card }: { card: CardType }): JSX.Element {
  const [status, setStatus] = useState(false);
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();
  // const cardList = useSelector((state: RootState) => state.cards.cardList);
  const inputHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setAnswer(card.answer);
    console.log(input);
  };

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
      {status && (
        <form onSubmit={inputHandler}>
          <div className="modalWindow">
            <img
              alt="Нотка половинная"
              style={{ width: '300px' }}
              src="https://e7.pngegg.com/pngimages/82/843/png-clipart-musical-note-musical-note-text-logo.png"
            />
            <audio src={card.source} autoPlay><track src={card.source}/></audio>
            <input
              placeholder="Введите название песни"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button type="submit">Проверка</button>
            <div className="answer">
              <p>{answer}</p>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default Card;
