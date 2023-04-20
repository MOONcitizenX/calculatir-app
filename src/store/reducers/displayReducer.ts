import { DisplayActionTypes, type DisplayAction } from '@store/actions/displayActions';

export interface DisplayState {
  expression: string;
  result: string;
}

const initialDisplay: DisplayState = {
  expression: '0',
  result: '0',
};

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
