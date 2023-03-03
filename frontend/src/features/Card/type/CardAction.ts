import type CardType from './CardType';

type CardAction =
  | { type: 'cards/loadCard'; payload: CardType[] }
  | { type: 'cards/checkCard'; payload: CardType[] };

export default CardAction;
