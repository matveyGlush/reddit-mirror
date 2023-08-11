import {ActionCreator, AnyAction, Reducer} from "redux";

export type RootState = {
  comment: string;
  token: string;
}
const initialState = {
  comment: 'Привет from matve!!',
  token: '',
}

export const setTokenInStore: ActionCreator<AnyAction> = (token) => ({
  type: 'SET_TOKEN',
  token,
});

export const updateComment: ActionCreator<AnyAction> = (text) => ({
  type: 'UPDATE_COMMENT',
  text,
});

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COMMENT':
      return {
        ...state,
        comment: action.text,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    default:
      return state;
  }
}
