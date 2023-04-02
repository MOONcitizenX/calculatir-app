import { type HistoryAction, HistoryActionTypes } from '@store/actions/historyActions';

export type HistoryState = string[];

const initialHistory: HistoryState = [];

export const historyReducer = (state = initialHistory, action: HistoryAction) => {
  switch (action.type) {
    case HistoryActionTypes.ADD:
      return [...state, action.payload];
    case HistoryActionTypes.CLEAR:
      return [];
    default:
      return state;
  }
};
