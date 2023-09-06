import React from 'react';
import styles from './commentslist.css';
import {useComments} from "../../../hooks/useComments";
import {Text} from "../../Text";
import {ReplyForm} from "./ReplyForm";
import {UserLink} from "../../CardsList/Card/TextContent/MetaData/UserLink";
import {KarmaCounter} from "../../CardsList/Card/Controls/KarmaCounter";

export function CommentsList(props: {subreddit: string, postId: string}) {

  let { comments } = useComments(props.subreddit, props.postId);
  if (comments.length === undefined && Object.entries(comments).length > 0 && Object.entries(comments)[0][0] !== 'error') {
    comments = Object.entries(comments)[0][1]
    console.log(comments)
  } else comments = []

  function recursiveComm(comm: any) {
    console.log('hello outside')

    if (comm.data.body) {
      console.log('hello')
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

  const loading = <p>loading</p>
  return (
    <div>
      {comments.length > 0 ? buildCommentsTree(comments) : loading}
    </div>
  );
}
