import type CardState from './type/CardState';
import type CardAction from './type/CardAction';

export const initialState: CardState = {
  cardList: [],
};

function reducer(state: CardState, action: CardAction): CardState {
  switch (action.type) {
    case 'cards/loadCard':
      return { ...state, cardList: action.payload };

    default:
      return state;
  }
}

export default reducer;
