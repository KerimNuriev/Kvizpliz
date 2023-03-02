// Использование Redux без Redux Toolkit - считается устаревшей практикой
import { createStore, combineReducers } from 'redux';
// import suggestionsReducer from './features/suggestions/reducer';
// import authReducer from './features/auth/reducer';
import cardReducer from './features/Card/cardReducer';
import themeReducer from './features/Theme/themeReducer';

// store - хранит объект с данными
// store.dispatch - функция для применения экшена

// store: RootState = {
//  notes: {
//    notesList: [],
//  },
//  profile: {
//    name: '...',
//  }
// }

const store = createStore(
  combineReducers({
    // ключ - название раздела (feature)
    // значение - сам редьюсер
    // у каждого раздела сайт свой собственный редьюсер
    cards: cardReducer,
    themes: themeReducer,
  }),
);

export default store;

// тип централизованного состояния
export type RootState = ReturnType<typeof store.getState>;
