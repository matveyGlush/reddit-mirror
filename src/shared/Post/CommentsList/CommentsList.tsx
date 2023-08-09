import React from 'react';
import styles from './commentslist.css';
import {useComments} from "../../../hooks/useComments";
import {Text} from "../../Text";
import {ReplyForm} from "./ReplyForm";

export function CommentsList(props: {subreddit: string, postId: string}) {

  const comments = useComments(props.subreddit, props.postId);

  function recursiveComm(comm: any) {
    if (comm.data.body) {
      return (
        <li className={styles.comment} key={comm.data.id} >
          <Text size={14}>{comm.data.body}</Text>
          <ReplyForm name={comm.data.author}/>
          { comm.data.replies !== "" && buildCommentsTree(comm.data.replies.data.children) }
        </li>
      )
    } else return;
  }

  function buildCommentsTree(comments: Array<any>) {
    return (
      <ul className={styles.commentList}>
        {comments.map((comm) => recursiveComm(comm))}
      </ul>
    )
  }

  return (
    <div>
      {buildCommentsTree(comments)}
    </div>
  );
}
