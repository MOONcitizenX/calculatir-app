import { DisplayActionTypes, type DisplayAction } from '@store/actions/displayActions';

const initialDisplay = {
  expression: '0',
  result: '0',
};

type DisplayState = typeof initialDisplay;

export const displayReducer = (
  state: DisplayState = initialDisplay,
  action: DisplayAction
): DisplayState => {
  switch (action.type) {
    case DisplayActionTypes.CHANGE_EXPRESSION:
      return { ...state, expression: action.payload };
    case DisplayActionTypes.CHANGE_RESULT:
      return { ...state, result: action.payload };
    default:
      return state;
  }
};
