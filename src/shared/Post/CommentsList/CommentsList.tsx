import React from 'react';
import styles from './commentslist.css';
import {useComments} from "../../../hooks/useComments";
import {Text} from "../../Text";
import {ReplyForm} from "./ReplyForm";
import {UserLink} from "../../CardsList/Card/TextContent/MetaData/UserLink";
import {KarmaCounter} from "../../CardsList/Card/Controls/KarmaCounter";

export function CommentsList(props: {subreddit: string, postId: string}) {

  const comments = useComments(props.subreddit, props.postId);

  function recursiveComm(comm: any) {
    if (comm.data.body) {
      return (
        <li className={styles.comment} key={comm.data.id} >
          <div className={styles.karmaCounterContainer}>
            <KarmaCounter downs={comm.data.downs} ups={comm.data.ups}/>
          </div>
          <div className={styles.commentMeta}>
            <UserLink author={comm.data.author} />
            <span className={styles.time}>1 час назад</span>
            <span className={styles.subreddit}>{comm.data.subreddit}</span>
          </div>
          <p className={styles.commentText}><Text size={14}>{comm.data.body}</Text></p>
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
