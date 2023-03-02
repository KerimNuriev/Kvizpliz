import type Card from './Card';

type CardAction =
  | { type: 'cards/loadCard'; payload: Card[] }
  | { type: 'cards/checkCard'; payload: Card[] };

export default CardAction;
