import { type HistoryAction, HistoryActionTypes } from '@store/actions/historyActions';

const initialHistory = {
  historyList: [] as unknown[],
};

type HistoryState = typeof initialHistory;

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
