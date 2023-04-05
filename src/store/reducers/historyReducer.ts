import { type HistoryAction, HistoryActionTypes } from '@store/actions/historyActions';

export interface HistoryState {
  historyList: Array<string | undefined>;
}

const initialHistory: HistoryState = {
  historyList: [],
};

export const historyReducer = (
  state: HistoryState = initialHistory,
  action: HistoryAction
): HistoryState => {
  switch (action.type) {
    case HistoryActionTypes.ADD:
      return { historyList: [...state.historyList, action.payload] };
    case HistoryActionTypes.CLEAR:
      return initialHistory;
    default:
      return state;
  }
};
