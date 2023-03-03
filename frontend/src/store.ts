import { createStore, combineReducers } from 'redux';
import { userReducer } from './features/Auth/reducer/userReduser';
import cardReducer from './features/Card/cardReducer';
import themeReducer from './features/Theme/themeReducer';


const store = createStore(
  combineReducers({
    user: userReducer,
    cards: cardReducer,
    themes: themeReducer,
  }),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
