import {Reducer} from "react";
import {
  COMMENT_REQUEST, COMMENT_REQUEST_ERROR, COMMENT_REQUEST_SUCCESS,
  CommentRequestAction,
  CommentRequestErrorAction,
  CommentRequestSuccessAction
} from "./actions";

type CommentActions = CommentRequestAction
  | CommentRequestSuccessAction
  | CommentRequestErrorAction;

export const commentReducer: Reducer<Array<any>, CommentActions> = (state, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return {
        ...state,
      }
    case COMMENT_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case COMMENT_REQUEST_SUCCESS:
      return {
        ...state,
        comments: action.comments,
      }
    default:
      return state;
  }
}
