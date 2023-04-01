import { combineReducers } from 'redux';
import { historyReducer } from './historyReducer';
import { themeReducer } from './themeReducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  history: historyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
