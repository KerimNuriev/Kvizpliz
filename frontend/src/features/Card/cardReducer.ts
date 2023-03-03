/* eslint-disable @typescript-eslint/default-param-last */
import type CardState from './type/CardState';
import type CardAction from './type/CardAction';

export const initialState: CardState = {
  cardList: [],
};

function reducer(
  state: CardState = initialState,
  action: CardAction,
): CardState {
  switch (action.type) {
    case 'cards/loadCard':
      return { ...state, cardList: action.payload };

    default:
      return state;
  }
}

export default reducer;
