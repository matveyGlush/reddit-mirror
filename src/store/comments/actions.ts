import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import axios from "axios";
import {useSelector} from "react-redux";

export const COMMENT_REQUEST_SUCCESS = 'COMMENT_REQUEST_SUCCESS';
export const COMMENT_REQUEST_ERROR = 'COMMENT_REQUEST_ERROR';
export const COMMENT_REQUEST = 'COMMENT_REQUEST';

export type CommentRequestAction = {
  type: typeof COMMENT_REQUEST;
}
export type CommentRequestSuccessAction = {
  type: typeof COMMENT_REQUEST_SUCCESS;
  comments: [];
}
export type CommentRequestErrorAction = {
  type: typeof COMMENT_REQUEST_ERROR;
  error: string,
}

export const commentRequest: ActionCreator<CommentRequestAction> = () => ({
  type: COMMENT_REQUEST,
});
export const commentRequestSuccess: ActionCreator<CommentRequestSuccessAction> = (comments: []) => ({
  type: COMMENT_REQUEST_SUCCESS,
  comments,
});
export const commentRequestError: ActionCreator<CommentRequestErrorAction> = (error: string) => ({
  type: COMMENT_REQUEST_ERROR,
  error,
});

export const commentRequestAsync = (subreddit: string, postId: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(commentRequest());
  axios.get(`https://oauth.reddit.com/r/${subreddit}/comments/${postId}`, {
    headers: {
      Authorization: `bearer ${getState().token}`
    }
  })
    .then((resp) => {
      dispatch(commentRequestSuccess(resp.data[1].data.children))
    })
    .catch(error => {
      console.log(error);
      dispatch(commentRequestError(String(error)))
    })
}
