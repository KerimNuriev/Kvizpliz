/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import type CardType from './type/CardType';
import './Card.scss';

function Card({ card }: { card: CardType }): JSX.Element {
  const [status, setStatus] = useState(false);
  const [status1, setStatus1] = useState(false);
  const [input, setInput] = useState('');
  // const [answer, setAnswer] = useState('');
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  // const cardList = useSelector((state: RootState) => state.cards.cardList);
  const handlerChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setInput(event.target.value);
  };
  const inputHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // setAnswer(card.answer);
    if (input.toLowerCase() === card.answer.toLowerCase()) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <>
      <div className="cardContainer">
        {!status ? (
          <button
            type="button"
            className="card"
            onClick={() => {
              setStatus(true);
              setStatus1(true);
            }}
          >
            {card.price}
          </button>
        ) : (
          <button
            type="button"
            className="card"
            onClick={() => {
              setStatus(true);
            }}
            disabled
          >
            {card.price}
          </button>
        )}
      </div>
      {status1 && (
        <div className="modal">
          <div className="modal__block">
            <form onSubmit={inputHandler}>
              <div className="modalWindow">
                <img
                  alt="Нотка половинная"
                  style={{ width: '300px' }}
                  src="./logo.png"
                />
                <audio src={card.source} autoPlay />
                <input
                  placeholder="Введите название песни"
                  value={input}
                  onChange={handlerChangeInput}
                />
                <button className="modalbtn" type="submit">
                  Проверка
                </button>
                {check && (
                  <div className="answer">
                    <h1>МЕГАХАРОШ</h1>
                    <button
                      type="button"
                      className="modalbtn"
                      onClick={() => setStatus1(false)}
                    >
                      {card.answer}
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
